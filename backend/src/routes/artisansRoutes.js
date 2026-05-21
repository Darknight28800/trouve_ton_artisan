import express from "express";
import {
    getAllArtisans,
    getTopArtisans,
    getArtisanById
} from "../controllers/artisansController.js";

import { Artisan } from "../models/index.js";
import verifyToken from "../middleware/verifyToken.js";
import isAdmin from "../middleware/isAdmin.js";

const router = express.Router();

// 🟩 ROUTES PUBLIQUES
router.get("/", getAllArtisans);
router.get("/top", getTopArtisans);
router.get("/:id", getArtisanById);

// 🟥 ROUTES ADMIN (sécurisées)
router.post("/", verifyToken, isAdmin, async (req, res) => {
    try {
        const { nom, email, telephone, specialiteId } = req.body;

        if (!nom || !email || !telephone || !specialiteId) {
            return res.status(400).json({ error: "Champs manquants" });
        }

        const newArtisan = await Artisan.create({
            nom,
            email,
            telephone,
            specialiteId
        });

        res.status(201).json(newArtisan);

    } catch (error) {
        console.error("Erreur POST artisan :", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
});

router.put("/:id", verifyToken, isAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const { nom, email, telephone, specialiteId } = req.body;

        const artisan = await Artisan.findByPk(id);
        if (!artisan) {
            return res.status(404).json({ error: "Artisan introuvable" });
        }

        artisan.nom = nom;
        artisan.email = email;
        artisan.telephone = telephone;
        artisan.specialiteId = specialiteId;

        await artisan.save();

        res.json(artisan);

    } catch (error) {
        console.error("Erreur PUT artisan :", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
});

router.delete("/:id", verifyToken, isAdmin, async (req, res) => {
    try {
        const { id } = req.params;

        const artisan = await Artisan.findByPk(id);
        if (!artisan) {
            return res.status(404).json({ error: "Artisan introuvable" });
        }

        await artisan.destroy();

        res.json({ message: "Artisan supprimé avec succès" });

    } catch (error) {
        console.error("Erreur DELETE artisan :", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
});

export default router;
