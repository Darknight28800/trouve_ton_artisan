import { Link } from "react-router-dom";

export default function CategorieCard({ categorie }) {
    return (
        <Link
            to={`/artisans?categorie=${categorie.id}`}
            className="categorie-card"
        >
            <div className="categorie-card-content">
                <h3>{categorie.nom}</h3>
            </div>
        </Link>
    );
}
