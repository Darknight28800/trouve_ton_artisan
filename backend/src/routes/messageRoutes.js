import express from "express";
import { getAllMessages } from "../controllers/messageController.js";
import verifyToken from "../middleware/verifyToken.js";
import isAdmin from "../middleware/isAdmin.js";

const router = express.Router();

// Toutes les routes messages sont réservées à l'admin
router.get("/", verifyToken, isAdmin, getAllMessages);

router.delete("/:id", verifyToken, isAdmin, async (req, res) => {
    try {
        const message = await ContactMessage.findByPk(req.params.id);

        if (!message) {
            return res.status(404).json({ error: "Message introuvable" });
        }

        await message.destroy();
        res.json({ message: "Message supprimé" });

    } catch (error) {
        console.error("Erreur suppression message :", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
});

export default router;
