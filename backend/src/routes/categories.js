import express from "express";
import { getCategories, getCategoryById } from "../controllers/categoriesController.js";
import { Artisan, Specialite, Categorie } from "../models/index.js";

import verifyToken from "../middleware/verifyToken.js";
import isAdmin from "../middleware/isAdmin.js";

const router = express.Router();

// 🟩 ROUTES PUBLIQUES
router.get("/", getCategories);
router.get("/:id", getCategoryById);

// 🟩 ROUTE PUBLIQUE : artisans d'une catégorie
router.get("/:id/artisans", async (req, res) => {
    const { id } = req.params;

    try {
        const artisans = await Artisan.findAll({
            include: [
                {
                    model: Specialite,
                    as: "Specialite",
                    required: true,
                    include: [
                        {
                            model: Categorie,
                            as: "Categorie",
                            required: true,
                            where: { id }
                        }
                    ]
                }
            ]
        });

        res.json(artisans);
    } catch (error) {
        console.error("Erreur :", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
});

// 🟥 ROUTES ADMIN (sécurisées)
router.post("/", verifyToken, isAdmin, async (req, res) => {
    try {
        const { nom } = req.body;

        if (!nom) return res.status(400).json({ error: "Nom requis" });

        const categorie = await Categorie.create({ nom });

        res.status(201).json(categorie);
    } catch (error) {
        res.status(500).json({ error: "Erreur serveur" });
    }
});

router.put("/:id", verifyToken, isAdmin, async (req, res) => {
    try {
        const categorie = await Categorie.findByPk(req.params.id);
        if (!categorie) return res.status(404).json({ error: "Introuvable" });

        categorie.nom = req.body.nom;
        await categorie.save();

        res.json(categorie);
    } catch (error) {
        res.status(500).json({ error: "Erreur serveur" });
    }
});

router.delete("/:id", verifyToken, isAdmin, async (req, res) => {
    try {
        const categorie = await Categorie.findByPk(req.params.id);
        if (!categorie) return res.status(404).json({ error: "Introuvable" });

        await categorie.destroy();
        res.json({ message: "Catégorie supprimée" });
    } catch (error) {
        res.status(500).json({ error: "Erreur serveur" });
    }
});

export default router;
