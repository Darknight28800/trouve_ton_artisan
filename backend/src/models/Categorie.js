import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Categorie = sequelize.define("Categorie", {
        nom: DataTypes.STRING
    }, {
        tableName: "categorie",
        timestamps: false
    });

    return Categorie;
};

