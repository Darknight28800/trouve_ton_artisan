import express from "express";
import verifyToken from "../middleware/verifyToken.js";
import isAdmin from "../middleware/isAdmin.js";

import { Artisan, Categorie, Specialite, ContactMessage } from "../models/index.js";

const router = express.Router();

// 🟥 ROUTE ADMIN : statistiques globales
router.get("/stats", verifyToken, isAdmin, async (req, res) => {
    try {
        const artisans = await Artisan.count();
        const categories = await Categorie.count();
        const specialites = await Specialite.count();
        const messages = await ContactMessage.count();

        res.json({
            artisans,
            categories,
            specialites,
            messages
        });

    } catch (error) {
        console.error("Erreur stats admin :", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
});

export default router;
