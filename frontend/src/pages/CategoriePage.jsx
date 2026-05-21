import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/pages/CategoriePage.scss";

// On importe TON composant card
import ArtisanCard from "../components/ArtisanCard";

export default function CategoriePage() {
    const { id } = useParams();
    const [categorie, setCategorie] = useState(null);
    const [artisans, setArtisans] = useState([]);

    useEffect(() => {
        // Récupère la catégorie
        axios
            .get(`http://localhost:5001/api/categories/${id}`)
            .then((res) => setCategorie(res.data))
            .catch((err) => console.error(err));

        // Récupère les artisans liés à cette catégorie
        axios
            .get(`http://localhost:5001/api/categories/${id}/artisans`)
            .then((res) => setArtisans(res.data))
            .catch((err) => console.error(err));
    }, [id]);

    if (!categorie) return <p>Chargement...</p>;

    return (
        <div className="categorie-page container py-4">
            <h1 className="mb-4">{categorie.nom}</h1>

            {artisans.length === 0 && (
                <p>Aucun artisan trouvé dans cette catégorie.</p>
            )}

            {/* Grille responsive identique à la page artisans */}
            <div className="row g-4">
                {artisans.map((artisan) => (
                    <div key={artisan.id} className="col-12 col-md-6 col-lg-4">
                        <ArtisanCard artisan={artisan} />
                    </div>
                ))}
            </div>
        </div>
    );
}

