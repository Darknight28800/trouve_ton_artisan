import { useEffect, useState } from "react";
import api from "../services/api";
import ArtisanCard from "../components/ArtisanCard";
import CategorieCard from "../components/CategorieCard";
import SectionTitle from "../components/SectionTitle";
import Container from "../components/Container";

export default function HomePage() {
    const [topArtisans, setTopArtisans] = useState([]);
    const [categories, setCategories] = useState([]);

    // 🔥 SEO : Title + Meta Description
    useEffect(() => {
        document.title = "Trouve Ton Artisan - Accueil";

        const meta = document.querySelector("meta[name='description']");
        if (meta) {
            meta.setAttribute(
                "content",
                "Trouvez facilement un artisan en Auvergne-Rhône-Alpes : recherche, catégories, artisans recommandés et contact rapide."
            );
        }
    }, []);

    useEffect(() => {
        api.get("/artisans/top").then((res) => setTopArtisans(res.data));
        api.get("/categories").then((res) => setCategories(res.data));
    }, []);

    return (
        <Container className="home-page">
            <h1>Bienvenue sur Trouve Ton Artisan</h1>

            <SectionTitle>🛠️ Comment trouver mon artisan ?</SectionTitle>

            <div className="steps">
                <div className="step">
                    <span className="number">1</span>
                    <p>Choisir la catégorie d’artisanat dans le menu.</p>
                </div>

                <div className="step">
                    <span className="number">2</span>
                    <p>Choisir un artisan.</p>
                </div>

                <div className="step">
                    <span className="number">3</span>
                    <p>Le contacter via le formulaire de contact.</p>
                </div>

                <div className="step">
                    <span className="number">4</span>
                    <p>Une réponse sera apportée sous 48h.</p>
                </div>
            </div>

            <SectionTitle>⭐ Artisans recommandés</SectionTitle>
            <div className="container mt-4">
                <div className="row g-4">
                    {topArtisans.map((artisan) => (
                        <div key={artisan.id} className="col-12 col-md-6 col-lg-4">
                            <ArtisanCard artisan={artisan} />
                        </div>
                    ))}
                </div>
            </div>

            <SectionTitle>🏆 Artisans du mois</SectionTitle>
            <div className="artisans-list">
                {topArtisans.slice(0, 3).map((artisan) => (
                    <ArtisanCard key={artisan.id} artisan={artisan} />
                ))}
            </div>

            <SectionTitle>📂 Catégories</SectionTitle>
            <div className="categories-list">
                {categories.map((cat) => (
                    <CategorieCard key={cat.id} categorie={cat} />
                ))}
            </div>
        </Container>
    );
}
