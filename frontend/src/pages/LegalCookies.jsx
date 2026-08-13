import { useEffect } from "react";
import Container from "../components/Container";

export default function LegalCookies() {

    useEffect(() => {
        document.title = "Trouve Ton Artisan - Cookies";

        const meta = document.querySelector("meta[name='description']");
        if (meta) {
            meta.setAttribute(
                "content",
                "Politique de cookies du site Trouve Ton Artisan : quelles données techniques sont utilisées et pourquoi."
            );
        }
    }, []);

    return (
        <Container className="legal-page">
            <h1>Politique de cookies</h1>

            <p>
                Le site Trouve Ton Artisan n'utilise <strong>aucun cookie de suivi, de mesure
                d'audience ou publicitaire</strong>. Aucun bandeau de consentement n'est donc
                affiché, car aucun traceur non essentiel n'est déposé sur votre navigateur.
            </p>

            <h2>Ce que le site utilise réellement</h2>
            <p>
                L'espace d'administration du site utilise le <strong>stockage local de votre
                navigateur</strong> (<code>localStorage</code>), et non des cookies, pour
                conserver votre session de connexion (jeton d'authentification et rôle). Ces
                informations :
            </p>
            <ul>
                <li>ne sont utilisées que pour les comptes administrateurs, pas pour les visiteurs du site ;</li>
                <li>restent stockées uniquement sur votre appareil, et ne sont jamais transmises à un tiers ;</li>
                <li>sont supprimées automatiquement lors de la déconnexion, ou expirent après 24 heures.</li>
            </ul>

            <h2>Évolution de cette politique</h2>
            <p>
                Si le site venait à intégrer, à l'avenir, des outils de mesure d'audience ou des
                services tiers déposant des cookies (statistiques, cartes interactives, etc.),
                cette page sera mise à jour et un bandeau de consentement conforme au RGPD sera
                mis en place avant tout dépôt de cookie non essentiel.
            </p>

            <h2>Nous contacter</h2>
            <p>
                Pour toute question relative à cette politique, vous pouvez nous écrire à{" "}
                <a href="mailto:sphereweb.28@gmail.com">sphereweb.28@gmail.com</a>.
            </p>
        </Container>
    );
}
