import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Artisan = sequelize.define("Artisan", {
        nom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        note: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        ville: {
            type: DataTypes.STRING,
            allowNull: true
        },

        // ⚠️ Ancien champ (tu peux le garder si tu veux)
        a_propos: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        // ⭐ NOUVEAU CHAMP : description
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },

        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        site_web: {
            type: DataTypes.STRING,
            allowNull: true
        },
        top: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },

        specialite_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: "artisan",
        timestamps: false
    });

    return Artisan;
};
