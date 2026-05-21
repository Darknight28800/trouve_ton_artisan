import { useEffect } from "react";

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
        <div className="container text-center" style={{ padding: "60px 20px" }}>
            <img 
                src="/images/404.jpg"
                alt="Page non trouvée"
                style={{ maxWidth: "350px", marginBottom: "20px" }}
            />

            <h1>Page non trouvée</h1>
            <p>La page que vous cherchez n'existe pas.</p>

            <a href="/" className="btn btn-primary mt-3">
                Retour à l'accueil
            </a>
        </div>
    );
}
