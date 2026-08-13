import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import ArtisanCard from "../components/ArtisanCard";
import CategorieCard from "../components/CategorieCard";
import Container from "../components/Container";

export default function HomePage() {
    const [topArtisans, setTopArtisans] = useState([]);
    const [categories, setCategories] = useState([]);
    const [stats, setStats] = useState({ artisans: 0, specialites: 0, note: null });

    const [categorieId, setCategorieId] = useState("");
    const [ville, setVille] = useState("");
    const navigate = useNavigate();

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
        api.get("/artisans/top").then((res) => setTopArtisans(res.data)).catch((err) => console.error(err));
        api.get("/categories").then((res) => setCategories(res.data)).catch((err) => console.error(err));

        api.get("/artisans").then((res) => {
            const artisans = res.data;
            const notes = artisans.map((a) => a.note).filter((n) => typeof n === "number");
            const avgNote = notes.length ? notes.reduce((sum, n) => sum + n, 0) / notes.length : null;
            setStats((s) => ({ ...s, artisans: artisans.length, note: avgNote }));
        }).catch((err) => console.error(err));

        api.get("/specialites").then((res) => {
            setStats((s) => ({ ...s, specialites: res.data.length }));
        }).catch((err) => console.error(err));
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        const params = new URLSearchParams();
        if (categorieId) params.set("categorie", categorieId);
        if (ville) params.set("search", ville);
        navigate(`/artisans${params.toString() ? `?${params}` : ""}`);
    };

    return (
        <>
            {/* HERO */}
            <section className="hero">
                <Container>
                    <h1>
                        Trouvez votre <strong>artisan de confiance</strong>
                    </h1>
                    <p className="hero-subtitle">Les meilleurs professionnels près de chez vous.</p>

                    <form className="hero-search glass-panel" onSubmit={handleSearch}>
                        <label htmlFor="hero-categorie" className="sr-only">Catégorie</label>
                        <select
                            id="hero-categorie"
                            value={categorieId}
                            onChange={(e) => setCategorieId(e.target.value)}
                        >
                            <option value="">Quel service recherchez-vous ?</option>
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>{cat.nom}</option>
                            ))}
                        </select>

                        <label htmlFor="hero-ville" className="sr-only">Ville</label>
                        <input
                            id="hero-ville"
                            type="text"
                            placeholder="Votre ville"
                            value={ville}
                            onChange={(e) => setVille(e.target.value)}
                        />

                        <button type="submit">Rechercher</button>
                    </form>

                    <div className="hero-stats">
                        <div className="stat-card glass-panel">
                            <span className="stat-icon" aria-hidden="true">🧑‍🔧</span>
                            <span className="stat-value">{stats.artisans}</span>
                            <span className="stat-label">Artisans référencés</span>
                        </div>

                        <div className="stat-card glass-panel">
                            <span className="stat-icon" aria-hidden="true">🛠️</span>
                            <span className="stat-value">{stats.specialites}</span>
                            <span className="stat-label">Spécialités</span>
                        </div>

                        <div className="stat-card glass-panel">
                            <span className="stat-icon" aria-hidden="true">⭐</span>
                            <span className="stat-value">{stats.note ? `${stats.note.toFixed(1)}/5` : "—"}</span>
                            <span className="stat-label">Note moyenne</span>
                        </div>
                    </div>
                </Container>
            </section>

            <Container className="home-page">
                {/* ARTISANS POPULAIRES */}
                <section>
                    <h2>Artisans populaires</h2>
                    <p className="section-subtitle">Découvrez les artisans les mieux notés</p>

                    <div className="artisans-grid">
                        {topArtisans.slice(0, 3).map((artisan) => (
                            <ArtisanCard key={artisan.id} artisan={artisan} />
                        ))}
                    </div>

                    <div className="see-all">
                        <a href="/artisans" className="btn-see-all">Voir tous les artisans</a>
                    </div>
                </section>

                {/* CATÉGORIES */}
                <section>
                    <h2>Catégories</h2>
                    <div className="categories-list">
                        {categories.map((cat) => (
                            <CategorieCard key={cat.id} categorie={cat} />
                        ))}
                    </div>
                </section>

                {/* COMMENT ÇA MARCHE */}
                <section>
                    <h2>Comment trouver mon artisan ?</h2>

                    <div className="steps">
                        <div className="step glass-panel">
                            <span className="number">1</span>
                            <p>Choisir la catégorie d'artisanat dans le menu.</p>
                        </div>

                        <div className="step glass-panel">
                            <span className="number">2</span>
                            <p>Choisir un artisan.</p>
                        </div>

                        <div className="step glass-panel">
                            <span className="number">3</span>
                            <p>Le contacter via le formulaire de contact.</p>
                        </div>

                        <div className="step glass-panel">
                            <span className="number">4</span>
                            <p>Une réponse sera apportée sous 48h.</p>
                        </div>
                    </div>
                </section>

                {/* ATOUTS */}
                <section className="features">
                    <div className="feature-card glass-panel">
                        <span className="feature-icon" aria-hidden="true">📩</span>
                        <div>
                            <h3>Contact rapide</h3>
                            <p>Envoyez votre demande en quelques clics via le formulaire de contact.</p>
                        </div>
                    </div>

                    <div className="feature-card glass-panel">
                        <span className="feature-icon" aria-hidden="true">✅</span>
                        <div>
                            <h3>Artisans référencés par l'équipe</h3>
                            <p>Chaque fiche est ajoutée et vérifiée par l'équipe Trouve Ton Artisan.</p>
                        </div>
                    </div>
                </section>
            </Container>
        </>
    );
}
