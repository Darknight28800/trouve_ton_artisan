import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Etoiles from "../components/Etoiles";
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

    if (!artisan) return <p className="loading">Chargement...</p>;

    // Image générée automatiquement (comme dans les cards)
    const imageUrl = getArtisanImage(artisan);

    return (
        <Container className="artisan-page">
            <div className="artisan-info glass-panel">
                <div className="artisan-image">
                    <img src={imageUrl} alt={artisan.nom} />
                </div>

                <div className="artisan-details">
                    <h1>{artisan.nom}</h1>
                    <Etoiles note={artisan.note} />

                    <div className="tags">
                        {artisan.ville && <span className="tag">📍 {artisan.ville}</span>}
                        {artisan.Specialite?.nom && <span className="tag">{artisan.Specialite.nom}</span>}
                        {artisan.Specialite?.Categorie?.nom && (
                            <span className="tag">{artisan.Specialite.Categorie.nom}</span>
                        )}
                    </div>

                    {artisan.description && (
                        <div className="artisan-description">
                            <h2>À propos</h2>
                            <p>{artisan.description}</p>
                        </div>
                    )}

                    <Link to={`/contact?artisan=${artisan.id}`} className="btn-contact">
                        Contacter cet artisan
                    </Link>
                </div>
            </div>
        </Container>
    );
}
