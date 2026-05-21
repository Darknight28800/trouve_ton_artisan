import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { getArtisanImage } from "../utile/getArtisanImage"; 
import "../styles/pages/artisan.scss";

export default function ArtisanPage() {
    const { id } = useParams();
    const [artisan, setArtisan] = useState(null);

    useEffect(() => {
        api.get(`/artisans/${id}`).then((res) => setArtisan(res.data));
    }, [id]);

    // 🔥 SEO dynamique
    useEffect(() => {
        if (!artisan) return;

        // Title dynamique
        document.title = `Trouve Ton Artisan - ${artisan.nom}`;

        // Meta description dynamique
        const meta = document.querySelector("meta[name='description']");
        if (meta) {
            meta.setAttribute(
                "content",
                `${artisan.nom}, ${artisan.Specialite?.nom} à ${artisan.ville}. Découvrez sa spécialité et contactez-le facilement via Trouve Ton Artisan.`
            );
        }
    }, [artisan]);

    if (!artisan) return <p>Chargement...</p>;

    // Image générée automatiquement (comme dans les cards)
    const imageUrl = getArtisanImage(artisan);

    return (
        <Container className="artisan-page">

            {/* Image artisan */}
            <img 
                src={imageUrl}
                alt={artisan.nom}
                style={{
                    width: "300px",
                    borderRadius: "8px",
                    marginBottom: "20px"
                }}
            />

            <h1>{artisan.nom}</h1>

            <p><strong>Ville :</strong> {artisan.ville}</p>
            <p><strong>Spécialité :</strong> {artisan.Specialite?.nom}</p>
            <p><strong>Catégorie :</strong> {artisan.Specialite?.Categorie?.nom}</p>

            {/* DESCRIPTION — ajout propre */}
            {artisan.description && (
                <div className="artisan-description" style={{ marginTop: "20px" }}>
                    <h2>À propos</h2>
                    <p>{artisan.description}</p>
                </div>
            )}

            {/* Bouton contacter */}
            <Link 
                to={`/contact?artisan=${artisan.id}`} 
                className="btn-contact"
            >
                Contacter cet artisan
            </Link>
        </Container>
    );
}
