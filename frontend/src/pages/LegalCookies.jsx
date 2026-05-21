import { useEffect } from "react";
import Container from "../components/Container";

export default function LegalCookies() {

    useEffect(() => {
        document.title = "Trouve Ton Artisan - Cookies";

        const meta = document.querySelector("meta[name='description']");
        if (meta) {
            meta.setAttribute(
                "content",
                "Page en construction : politique de cookies du site Trouve Ton Artisan."
            );
        }
    }, []);

    return (
        <Container className="legal-page">
            <h1>Politique de cookies</h1>
            <p>Page en construction.</p>
        </Container>
    );
}
