import * as db from "../models/index.js";

export const getCategories = async (req, res) => {
    try {
        const categories = await db.Categorie.findAll();
        res.json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur serveur" });
    }
};

export const getCategoryById = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await db.Categorie.findByPk(id);

        if (!category) {
        return res.status(404).json({ error: "Catégorie non trouvée" });
        }

        res.json(category);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur serveur" });
    }
};

