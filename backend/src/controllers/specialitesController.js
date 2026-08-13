import { Specialite, Categorie } from "../models/index.js";

export const getSpecialites = async (req, res) => {
    try {
        const specialites = await Specialite.findAll({
            include: [{ model: Categorie, as: "Categorie" }]
        });
        res.json(specialites);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur serveur" });

    }
};
