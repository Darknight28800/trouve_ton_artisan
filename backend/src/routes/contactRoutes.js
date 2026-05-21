import express from "express";
import { ContactMessage, Artisan } from "../models/index.js";
import verifyToken from "../middleware/verifyToken.js";
import isAdmin from "../middleware/isAdmin.js";

const router = express.Router();

// 🟩 Récupérer tous les messages (ADMIN)
router.get("/", verifyToken, isAdmin, async (req, res) => {
    try {
        const messages = await ContactMessage.findAll({
            include: [
                {
                    model: Artisan,
                    as: "Artisan",
                    attributes: ["id", "nom"]
                }
            ],
            order: [["createdAt", "DESC"]]
        });

        res.json(messages);
    } catch (error) {
        console.error("Erreur GET /contact :", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
});

// 🟩 Envoi d’un message depuis le formulaire public
router.post("/", async (req, res) => {
    try {
        const { nom, prenom, email, telephone, message, artisanId } = req.body;

        if (!nom || !email || !message) {
            return res.status(400).json({ error: "Champs requis manquants" });
        }

        const newMessage = await ContactMessage.create({
            nom,
            prenom,
            email,
            telephone,
            message,
            artisanId
        });

        res.status(201).json(newMessage);
    } catch (error) {
        console.error("Erreur POST /contact :", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
});

// 🟥 SUPPRESSION D’UN MESSAGE (ADMIN)
router.delete("/:id", verifyToken, isAdmin, async (req, res) => {
    try {
        const message = await ContactMessage.findByPk(req.params.id);

        if (!message) {
            return res.status(404).json({ error: "Message introuvable" });
        }

        await message.destroy();
        res.json({ message: "Message supprimé" });

    } catch (error) {
        console.error("Erreur DELETE /contact :", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
});

export default router;
