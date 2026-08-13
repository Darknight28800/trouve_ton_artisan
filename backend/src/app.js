import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import helmet from "helmet";
import { sequelize } from "./models/index.js";

const requiredEnvVars = ["DB_HOST", "DB_USER", "DB_NAME", "DB_DIALECT", "JWT_SECRET"];
const missingEnvVars = requiredEnvVars.filter((key) => !process.env[key]);
if (missingEnvVars.length > 0) {
    console.error(`Variables d'environnement manquantes : ${missingEnvVars.join(", ")}`);
    process.exit(1);
}

// 🔄 Synchronisation des tables
sequelize.sync({ alter: true })
    .then(() => console.log("Tables synchronisées"))
    .catch(err => console.error(err));

const app = express();
app.use(helmet());
app.use(cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173"
}));
app.use(express.json());

// ------------------------------
// ROUTES API
// ------------------------------

import artisansRoutes from "./routes/artisansRoutes.js";
import categoriesRoutes from "./routes/categories.js";
import specialitesRoutes from "./routes/specialites.js";
import contactRoutes from "./routes/contactRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import authRoutes from "./routes/auth.js";
import adminRoutes from "./routes/adminRoutes.js";

// 🟩 Routes publiques
app.use("/api/artisans", artisansRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/specialites", specialitesRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/messages", messageRoutes);

// 🔐 Authentification
app.use("/api/auth", authRoutes);

// 🟥 Routes admin sécurisées
app.use("/api/admin", adminRoutes);

// ------------------------------
// CONNEXION DB
// ------------------------------

sequelize.authenticate()
    .then(() => console.log("Connexion DB OK"))
    .catch(err => console.error("Erreur connexion DB :", err));

// ------------------------------
// LANCEMENT SERVEUR
// ------------------------------

const PORT = process.env.PORT || 5001;

app.listen(PORT, "0.0.0.0", () => {
    console.log("API en ligne sur le port " + PORT);
});
