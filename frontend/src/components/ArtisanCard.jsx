import { Link } from "react-router-dom";
import Etoiles from "./Etoiles";
import { getSpecialiteIcon } from "../utile/artisanIcon";
import { getCategoryTheme } from "../utile/categoryTheme";

export default function ArtisanCard({ artisan }) {
    const specialiteNom = artisan.Specialite?.nom || "";
    const categorieNom = artisan.Specialite?.Categorie?.nom || "";
    const icon = getSpecialiteIcon(specialiteNom, categorieNom);
    const theme = getCategoryTheme(categorieNom);

    return (
        <div className="artisan-card glass-panel">
            <div
                className="artisan-card-visual"
                style={{
                    background: `linear-gradient(135deg, ${theme.accent}, ${theme.accent2})`,
                }}
            >
                <span aria-hidden="true">{icon}</span>
            </div>

            <div className="artisan-card-body">
                <h3>{artisan.nom}</h3>

                <p className="artisan-card-ville">
                    <span aria-hidden="true">📍</span> {artisan.ville}
                </p>

                <div className="artisan-card-note">
                    <Etoiles note={artisan.note} />
                </div>

                <p className="artisan-card-specialite">
                    {specialiteNom}
                    {categorieNom && ` · ${categorieNom}`}
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
