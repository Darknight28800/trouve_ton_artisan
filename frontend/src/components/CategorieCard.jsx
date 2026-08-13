import { Link } from "react-router-dom";
import { getCategoryTheme } from "../utile/categoryTheme";

export default function CategorieCard({ categorie }) {
    const theme = getCategoryTheme(categorie.nom);

    return (
        <Link
            to={`/artisans?categorie=${categorie.id}`}
            className="categorie-card"
        >
            <div
                className="categorie-card-content"
                style={{
                    "--cat-accent": theme.accent,
                    "--cat-accent2": theme.accent2,
                }}
            >
                <h3>{categorie.nom}</h3>
            </div>
        </Link>
    );
}
