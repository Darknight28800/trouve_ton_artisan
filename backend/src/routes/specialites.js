import express from "express";
import { getSpecialites } from "../controllers/specialitesController.js";
import { Specialite } from "../models/index.js";

import verifyToken from "../middleware/verifyToken.js";
import isAdmin from "../middleware/isAdmin.js";

const router = express.Router();

// 🟩 ROUTE PUBLIQUE
router.get("/", getSpecialites);
router.get("/:id", async (req, res) => {
    try {
        const specialite = await Specialite.findByPk(req.params.id);
        if (!specialite) return res.status(404).json({ error: "Introuvable" });

        res.json(specialite);
    } catch (error) {
        res.status(500).json({ error: "Erreur serveur" });
    }
});


// 🟥 ROUTES ADMIN (sécurisées)
router.post("/", verifyToken, isAdmin, async (req, res) => {
    try {
        const { nom, categorieId } = req.body;

        if (!nom || !categorieId)
            return res.status(400).json({ error: "Champs requis" });

        const specialite = await Specialite.create({ nom, categorieId });

        res.status(201).json(specialite);
    } catch (error) {
        res.status(500).json({ error: "Erreur serveur" });
    }
});

router.put("/:id", verifyToken, isAdmin, async (req, res) => {
    try {
        const specialite = await Specialite.findByPk(req.params.id);
        if (!specialite) return res.status(404).json({ error: "Introuvable" });

        specialite.nom = req.body.nom;
        specialite.categorieId = req.body.categorieId;

        await specialite.save();

        res.json(specialite);
    } catch (error) {
        res.status(500).json({ error: "Erreur serveur" });
    }
});

router.delete("/:id", verifyToken, isAdmin, async (req, res) => {
    try {
        const specialite = await Specialite.findByPk(req.params.id);
        if (!specialite) return res.status(404).json({ error: "Introuvable" });

        await specialite.destroy();
        res.json({ message: "Spécialité supprimée" });
    } catch (error) {
        res.status(500).json({ error: "Erreur serveur" });
    }
});

export default router;
