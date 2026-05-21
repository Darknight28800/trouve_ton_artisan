import { useEffect } from "react";
import Container from "../components/Container";

export default function LegalAccessibility() {

    useEffect(() => {
        document.title = "Trouve Ton Artisan - Accessibilité";

        const meta = document.querySelector("meta[name='description']");
        if (meta) {
            meta.setAttribute(
                "content",
                "Page en construction : informations sur l’accessibilité du site Trouve Ton Artisan."
            );
        }
    }, []);

    return (
        <Container className="legal-page">
            <h1>Accessibilité</h1>
            <p>Page en construction.</p>
        </Container>
    );
}
