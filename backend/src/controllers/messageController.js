import { ContactMessage, Artisan } from "../models/index.js";

export const getAllMessages = async (req, res) => {
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
        console.error("Erreur getAllMessages :", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
};
