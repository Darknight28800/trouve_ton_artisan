import { Specialite } from "../models/index.js";

export const getSpecialites = async (req, res) => {
    try {
        const specialites = await Specialite.findAll();
        res.json(specialites);
    } catch (error) {
        console.error(err);
        res.status(500).json({ error: "Erreur serveur" });

    }
};
