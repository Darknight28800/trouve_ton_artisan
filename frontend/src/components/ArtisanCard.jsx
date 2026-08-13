import { Link } from "react-router-dom";
import Etoiles from "./Etoiles";
import { getArtisanImage } from "../utile/getArtisanImage";

export default function ArtisanCard({ artisan }) {
    const imageUrl = getArtisanImage(artisan);

    return (
        <div className="artisan-card glass-panel">
            <img src={imageUrl} alt={artisan.nom} className="artisan-card-img" />

            <div className="artisan-card-body">
                <h3>{artisan.nom}</h3>

                <p className="artisan-card-ville">
                    <span aria-hidden="true">📍</span> {artisan.ville}
                </p>

                <div className="artisan-card-note">
                    <Etoiles note={artisan.note} />
                </div>

                <p className="artisan-card-specialite">
                    {artisan.Specialite?.nom}
                    {artisan.Specialite?.Categorie?.nom && ` · ${artisan.Specialite.Categorie.nom}`}
                </p>

                <div className="artisan-card-actions">
                    <Link to={`/artisan/${artisan.id}`} className="btn-outline">
                        Voir la fiche
                    </Link>

                    <Link to={`/contact?artisan=${artisan.id}`} className="btn-solid">
                        Contacter
                    </Link>
                </div>
            </div>
        </div>
    );
}
