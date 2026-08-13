// Crée ou met à jour un compte administrateur (email + mot de passe saisis en interactif).
// Usage : npm run create-admin

import "dotenv/config";
import readline from "node:readline";
import bcrypt from "bcrypt";
import { sequelize, User } from "../src/models/index.js";

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const lines = rl[Symbol.asyncIterator]();

async function ask(question) {
    process.stdout.write(question);
    const { value, done } = await lines.next();
    if (done) throw new Error("Entrée interrompue.");
    return value.trim();
}

async function main() {
    console.log("=== Création / mise à jour du compte administrateur ===\n");

    const email = await ask("Email admin : ");
    if (!email || !email.includes("@")) {
        throw new Error("Email invalide.");
    }

    const password = await ask("Mot de passe (min. 8 caractères) : ");
    if (!password || password.length < 8) {
        throw new Error("Le mot de passe doit contenir au moins 8 caractères.");
    }

    const confirm = await ask("Confirmer le mot de passe : ");
    if (password !== confirm) {
        throw new Error("Les mots de passe ne correspondent pas.");
    }

    rl.close();

    await sequelize.authenticate();

    const hash = await bcrypt.hash(password, 10);

    const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: { email, password: hash, role: "admin" }
    });

    if (!created) {
        user.password = hash;
        user.role = "admin";
        await user.save();
        console.log(`\nMot de passe mis à jour pour ${email}.`);
    } else {
        console.log(`\nCompte admin créé pour ${email}.`);
    }

    await sequelize.close();
    process.exit(0);
}

main().catch((err) => {
    console.error("\nErreur :", err.message || err);
    rl.close();
    process.exit(1);
});
