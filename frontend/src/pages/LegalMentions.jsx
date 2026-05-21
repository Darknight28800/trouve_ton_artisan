import { useEffect } from "react";
import Container from "../components/Container";

export default function LegalMentions() {

    useEffect(() => {
        document.title = "Trouve Ton Artisan - Mentions légales";

        const meta = document.querySelector("meta[name='description']");
        if (meta) {
            meta.setAttribute(
                "content",
                "Page en construction : mentions légales du site Trouve Ton Artisan."
            );
        }
    }, []);

    return (
        <Container className="legal-page">
            <h1>Mentions légales</h1>
            <p>Page en construction.</p>
        </Container>
    );
}
