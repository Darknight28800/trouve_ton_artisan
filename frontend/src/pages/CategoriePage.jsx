import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/pages/CategoriePage.scss";
import Container from "../components/Container";
import ArtisanCard from "../components/ArtisanCard";
import { getCategoryTheme } from "../utile/categoryTheme";

export default function CategoriePage() {
    const { id } = useParams();
    const [categorie, setCategorie] = useState(null);
    const [artisans, setArtisans] = useState([]);

    useEffect(() => {
        // Récupère la catégorie
        api
            .get(`/categories/${id}`)
            .then((res) => setCategorie(res.data))
            .catch((err) => console.error(err));

        // Récupère les artisans liés à cette catégorie
        api
            .get(`/categories/${id}/artisans`)
            .then((res) => setArtisans(res.data))
            .catch((err) => console.error(err));
    }, [id]);

    // Applique la teinte de la catégorie au fond de toute la page (body),
    // et la retire en quittant la page.
    useEffect(() => {
        if (!categorie) return;

        const theme = getCategoryTheme(categorie.nom);
        document.body.style.setProperty("--cat-accent", theme.accent);
        document.body.style.setProperty("--cat-accent2", theme.accent2);
        document.body.classList.add("category-theme");

        return () => {
            document.body.classList.remove("category-theme");
            document.body.style.removeProperty("--cat-accent");
            document.body.style.removeProperty("--cat-accent2");
        };
    }, [categorie]);

    if (!categorie) return <p className="loading">Chargement...</p>;

    return (
        <Container className="categorie-page">
            <h1>{categorie.nom}</h1>

            {artisans.length === 0 ? (
                <p className="no-results">Aucun artisan trouvé dans cette catégorie.</p>
            ) : (
                <div className="artisans-list">
                    {artisans.map((artisan) => (
                        <ArtisanCard key={artisan.id} artisan={artisan} />
                    ))}
                </div>
            )}
        </Container>
    );
}
