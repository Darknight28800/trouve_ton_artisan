import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { sequelize } from "./models/index.js";

// 🔄 Synchronisation des tables
sequelize.sync({ alter: true })
    .then(() => console.log("Tables synchronisées"))
    .catch(err => console.error(err));

const app = express();
app.use(cors());
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
// SERVE REACT FRONTEND
// ------------------------------

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const frontendPath = path.join(__dirname, "../frontend/dist");

// Sert les fichiers statiques du build React
// app.use(express.static(frontendPath));

// Catch-all : renvoie index.html pour toutes les routes non API
// app.use((req, res) => {
//     res.sendFile(path.join(frontendPath, "index.html"));
// });

// ------------------------------
// LANCEMENT SERVEUR
// ------------------------------

const PORT = process.env.PORT || 5001;

console.log(">>> AVANT LISTEN <<<");

app.listen(PORT, "0.0.0.0", () => {
    console.log("API en ligne sur le port " + PORT);
});
