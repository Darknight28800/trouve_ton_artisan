import { useEffect } from "react";
import Container from "../components/Container";

export default function LegalData() {

    useEffect(() => {
        document.title = "Trouve Ton Artisan - Données personnelles";

        const meta = document.querySelector("meta[name='description']");
        if (meta) {
            meta.setAttribute(
                "content",
                "Page en construction : politique de données personnelles du site Trouve Ton Artisan."
            );
        }
    }, []);

    return (
        <Container className="legal-page">
            <h1>Données personnelles</h1>
            <p>Page en construction.</p>
        </Container>
    );
}
