import { transporter } from "../config/email.js";
import { Artisan, ContactMessage } from "../models/index.js";

export const sendContactMessage = async (req, res) => {
    try {
        const { nom, prenom, telephone, email, message, artisanId } = req.body;

        if (!nom || !email || !message) {
            return res.status(400).json({ error: "Champs requis manquants" });
        }

        // L'artisan est optionnel (formulaire de contact général vs. fiche artisan)
        let artisan = null;
        if (artisanId) {
            artisan = await Artisan.findByPk(artisanId);
            if (!artisan) {
                return res.status(404).json({ error: "Artisan introuvable" });
            }
        }

        // Enregistrer le message en base
        const newMessage = await ContactMessage.create({
            nom,
            prenom,
            telephone,
            email,
            message,
            artisanId: artisan ? artisan.id : null
        });

        // Envoyer l'email uniquement si un artisan destinataire existe
        if (artisan?.email) {
            await transporter.sendMail({
                from: `"Trouve Ton Artisan" <${process.env.MAIL_USER}>`,
                to: artisan.email,
                subject: `Nouveau message de ${nom} ${prenom}`,
                html: `
                    <h2>Nouveau message reçu</h2>
                    <p><strong>Nom :</strong> ${nom}</p>
                    <p><strong>Prénom :</strong> ${prenom}</p>
                    <p><strong>Téléphone :</strong> ${telephone}</p>
                    <p><strong>Email :</strong> ${email}</p>
                    <p><strong>Message :</strong><br>${message}</p>
                `,
            });
        }

        res.status(201).json(newMessage);

    } catch (error) {
        console.error("Erreur contact :", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
};
