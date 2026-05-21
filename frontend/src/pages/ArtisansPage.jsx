import { useEffect, useState } from "react";
import api from "../services/api";
import ArtisanCard from "../components/ArtisanCard";
import Container from "../components/Container";
import { useLocation } from "react-router-dom";
import { searchArtisans, getArtisans } from "../services/api";

export default function ArtisansPage() {
    const [artisans, setArtisans] = useState([]);
    const [categories, setCategories] = useState([]);
    const [specialites, setSpecialites] = useState([]);

    const [search, setSearch] = useState("");
    const [categorieId, setCategorieId] = useState("");
    const [specialiteId, setSpecialiteId] = useState("");

    const location = useLocation();

    // 🔥 SEO dynamique
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const searchParam = params.get("search");
        const categorieParam = params.get("categorie");

        // Title dynamique
        if (searchParam) {
            document.title = `Trouve Ton Artisan - Recherche : ${searchParam}`;
        } else if (categorieParam) {
            document.title = `Trouve Ton Artisan - Catégorie`;
        } else {
            document.title = "Trouve Ton Artisan - Liste des artisans";
        }

        // Meta description dynamique
        const meta = document.querySelector("meta[name='description']");
        if (meta) {
            if (searchParam) {
                meta.setAttribute(
                    "content",
                    `Résultats pour la recherche "${searchParam}" sur Trouve Ton Artisan. Trouvez un artisan en Auvergne-Rhône-Alpes.`
                );
            } else {
                meta.setAttribute(
                    "content",
                    "Liste des artisans en Auvergne-Rhône-Alpes. Filtrez par catégorie ou spécialité et trouvez un artisan près de chez vous."
                );
            }
        }
    }, [location.search]);

    // Charger artisans selon recherche OU catégorie dans l'URL
    useEffect(() => {
        async function fetchData() {
            const params = new URLSearchParams(location.search);

            const searchParam = params.get("search");
            const categorieParam = params.get("categorie");

            try {
                let data;

                // Recherche par mot-clé
                if (searchParam) {
                    data = await searchArtisans(searchParam);
                    setSearch(searchParam);
                } else {
                    data = await getArtisans();
                }

                // Filtrage par catégorie depuis l'URL
                if (categorieParam) {
                    setCategorieId(categorieParam);
                }

                setArtisans(data);
            } catch (error) {
                console.error("Erreur lors du chargement des artisans :", error);
            }
        }

        fetchData();
    }, [location.search]);

    // Charger catégories + spécialités
    useEffect(() => {
        api.get("/categories").then((res) => setCategories(res.data));
        api.get("/specialites").then((res) => setSpecialites(res.data));
    }, []);

    // Filtrage local
    const filtered = artisans.filter((a) => {
        const matchSearch = a.nom.toLowerCase().includes(search.toLowerCase());
        const matchCat = categorieId ? a.Specialite?.Categorie?.id == categorieId : true;
        const matchSpe = specialiteId ? a.Specialite?.id == specialiteId : true;
        return matchSearch && matchCat && matchSpe;
    });

    return (
        <Container className="artisans-page">

            <h1>Liste des artisans</h1>

            {/* Filtres */}
            <div className="filters">
                <select
                    value={categorieId}
                    onChange={(e) => setCategorieId(e.target.value)}
                >
                    <option value="">Toutes les catégories</option>
                    {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                            {cat.nom}
                        </option>
                    ))}
                </select>

                <select
                    value={specialiteId}
                    onChange={(e) => setSpecialiteId(e.target.value)}
                >
                    <option value="">Toutes les spécialités</option>
                    {specialites.map((spe) => (
                        <option key={spe.id} value={spe.id}>
                            {spe.nom}
                        </option>
                    ))}
                </select>
            </div>

            {/* Grille artisans */}
            <div className="artisans-list">
                {filtered.map((artisan) => (
                    <ArtisanCard key={artisan.id} artisan={artisan} />
                ))}
            </div>

        </Container>
    );
}
