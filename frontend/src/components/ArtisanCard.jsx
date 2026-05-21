import { Link } from "react-router-dom";
import Etoiles from "./Etoiles";
import { getArtisanImage } from "../utile/getArtisanImage";

export default function ArtisanCard({ artisan }) {
    const imageUrl = getArtisanImage(artisan);

    return (
        <div className="artisan-card card shadow-sm h-100 p-3">
            <img
                src={imageUrl}
                alt={artisan.nom}
                className="img-fluid rounded mb-3"
                style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />

            <h3 className="card-title">{artisan.nom}</h3>

            <div className="mb-2">
                <Etoiles note={artisan.note} />
            </div>

            <p className="card-text mb-1">
                <strong>Ville :</strong> {artisan.ville}
            </p>

            <p className="card-text mb-1">
                <strong>Spécialité :</strong> {artisan.Specialite?.nom}
            </p>

            <p className="card-text mb-1">
                <strong>Catégorie :</strong> {artisan.Specialite?.Categorie?.nom}
            </p>

            <Link
                to={`/artisan/${artisan.id}`}
                className="btn btn-outline-primary w-100 mb-2"
            >
                Voir la fiche
            </Link>

            <Link
                to={`/contact?artisan=${artisan.id}`}
                className="btn btn-primary w-100"
            >
                Contacter
            </Link>
        </div>
    );
}
