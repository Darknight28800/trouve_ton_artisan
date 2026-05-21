import { DataTypes } from "sequelize";

export default (sequelize) => {
    const ContactMessage = sequelize.define("ContactMessage", {
        nom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prenom: {
            type: DataTypes.STRING,
            allowNull: true
        },
        telephone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    ContactMessage.associate = (models) => {
        ContactMessage.belongsTo(models.Artisan, {
            foreignKey: "artisanId",
            as: "Artisan",
            onDelete: "CASCADE"
        });
    };

    return ContactMessage;
};
