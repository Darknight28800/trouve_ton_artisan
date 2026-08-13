import { useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import "../styles/pages/NotFound.scss";

export default function NotFound() {

    // 🔥 SEO dynamique
    useEffect(() => {
        document.title = "Trouve Ton Artisan - Page non trouvée";

        const meta = document.querySelector("meta[name='description']");
        if (meta) {
            meta.setAttribute(
                "content",
                "La page que vous recherchez n'existe pas ou a été déplacée. Retournez à l'accueil de Trouve Ton Artisan."
            );
        }
    }, []);

    return (
        <Container className="not-found-page">
            <div className="not-found-card glass-panel">
                <span className="not-found-code">404</span>
                <h1>Page non trouvée</h1>
                <p>La page que vous cherchez n'existe pas ou a été déplacée.</p>

                <Link to="/" className="btn-home">
                    Retour à l'accueil
                </Link>
            </div>
        </Container>
    );
}
