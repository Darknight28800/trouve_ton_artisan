import Container from "../components/Container";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../services/api";

export default function ContactPage() {
    const [sent, setSent] = useState(false);

    const [searchParams] = useSearchParams();
    const artisanId = searchParams.get("artisan");

    const [artisan, setArtisan] = useState(null);

    // 🔥 SEO dynamique
    useEffect(() => {
        document.title = "Trouve Ton Artisan - Contact";

        const meta = document.querySelector("meta[name='description']");
        if (meta) {
            meta.setAttribute(
                "content",
                "Contactez un artisan en Auvergne-Rhône-Alpes via notre formulaire sécurisé. Réponse garantie sous 48h."
            );
        }
    }, []);

    // Charger l'artisan si un ID est présent dans l'URL
    useEffect(() => {
        if (artisanId) {
            api.get(`/artisans/${artisanId}`).then((res) => setArtisan(res.data));
        }
    }, [artisanId]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            nom: e.target.nom.value,
            prenom: e.target.prenom.value,
            telephone: e.target.telephone.value,
            email: e.target.email.value,
            message: e.target.message.value,
            artisanId
        };

        try {
            await api.post("/contact", formData);
            setSent(true);
        } catch (error) {
            console.error(error);
            alert("Erreur lors de l’envoi du message.");
        }
    };

    return (
        <Container className="contact-page">
            <h1>Contact</h1>

            {/* Affichage du nom de l'artisan */}
            {artisan && (
                <p className="contact-target">
                    Vous contactez : <strong>{artisan.nom}</strong>
                </p>
            )}

            {!sent ? (
                <form onSubmit={handleSubmit}>
                    <input type="text" name="nom" placeholder="Votre nom" required />
                    <input type="text" name="prenom" placeholder="Votre prénom" />
                    <input type="tel" name="telephone" placeholder="Votre téléphone" />
                    <input type="email" name="email" placeholder="Votre email" required />
                    <textarea name="message" placeholder="Votre message" rows="5" required />
                    <button type="submit">Envoyer</button>
                </form>
            ) : (
                <p className="success">Votre message a bien été envoyé.</p>
            )}
        </Container>
    );
}
