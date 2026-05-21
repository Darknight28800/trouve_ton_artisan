import { Artisan, Specialite, Categorie } from "../models/index.js";
import { Op } from "sequelize";

export const getAllArtisans = async (req, res) => {
    try {
        const { categorie, q } = req.query;

        const where = {};
        if (q) where.nom = { [Op.like]: `%${q}%` };

        const include = [
    {
        model: Specialite,
        as: "Specialite",
        required: false, // 👈 IMPORTANT
        include: [
            {
                model: Categorie,
                as: "Categorie",
                required: false // 👈 IMPORTANT
            }
        ]
    }
];


        let artisans = await Artisan.findAll({ where, include });

        if (categorie) {
            artisans = artisans.filter(
                (a) =>
                    a.Specialite &&
                    a.Specialite.Categorie &&
                    a.Specialite.Categorie.id == categorie
            );
        }

        res.json(artisans);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Erreur serveur" });
    }
};

export const getTopArtisans = async (req, res) => {
    try {
        const artisans = await Artisan.findAll({
            where: { top: true },
            include: [
                {
                    model: Specialite,
                    as: "Specialite",
                    include: [
                        {
                            model: Categorie,
                            as: "Categorie"
                        }
                    ]
                }
            ],
            limit: 3
        });

        res.json(artisans);
    } catch (error) {
        res.status(500).json({ error: "Erreur serveur" });
    }
};


export const getArtisanById = async (req, res) => {
    try {
        const artisan = await Artisan.findByPk(req.params.id, {
            include: [
                {
                    model: Specialite,
                    as: "Specialite",
                    include: [
                        {
                            model: Categorie,
                            as: "Categorie"
                        }
                    ]
                }
            ]
        });

        if (!artisan) return res.status(404).json({ error: "Artisan introuvable" });

        res.json(artisan);
    } catch (error) {
        res.status(500).json({ error: "Erreur serveur" });
    }
};

