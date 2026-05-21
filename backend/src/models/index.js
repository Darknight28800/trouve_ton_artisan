import { sequelize } from "../config/database.js";

import ArtisanModel from "./Artisans.js";
import SpecialiteModel from "./Specialite.js";
import CategorieModel from "./Categorie.js";
import ContactMessageModel from "./contactmessages.model.js";
import UserModel from "./User.js"; // ← AJOUT IMPORTANT

// Initialisation des modèles
const Artisan = ArtisanModel(sequelize);
const Specialite = SpecialiteModel(sequelize);
const Categorie = CategorieModel(sequelize);
const ContactMessage = ContactMessageModel(sequelize);
const User = UserModel(sequelize); // ← AJOUT IMPORTANT

// Relations Categorie → Specialite (1:N)
Specialite.belongsTo(Categorie, { foreignKey: "categorie_id", as: "Categorie" });
Categorie.hasMany(Specialite, { foreignKey: "categorie_id", as: "Specialites" });

// Relations Artisan → Specialite (N:1)
Artisan.belongsTo(Specialite, { foreignKey: "specialite_id", as: "Specialite" });
Specialite.hasMany(Artisan, { foreignKey: "specialite_id", as: "Artisans" });

// Relations ContactMessage → Artisan (N:1)
ContactMessage.belongsTo(Artisan, { foreignKey: "artisanId", as: "Artisan" });
Artisan.hasMany(ContactMessage, { foreignKey: "artisanId", as: "ContactMessages" });

// Export des modèles
export { sequelize, Artisan, Specialite, Categorie, ContactMessage, User };
