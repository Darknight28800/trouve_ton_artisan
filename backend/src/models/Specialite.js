import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Specialite = sequelize.define("Specialite", {
        nom: DataTypes.STRING,
        categorie_id: DataTypes.INTEGER
    }, {
        tableName: "specialite",
        timestamps: false
    });

    return Specialite;
};

