import { useEffect } from "react";
import Container from "../components/Container";

export default function LegalAccessibility() {

    useEffect(() => {
        document.title = "Trouve Ton Artisan - Accessibilité";

        const meta = document.querySelector("meta[name='description']");
        if (meta) {
            meta.setAttribute(
                "content",
                "Déclaration d'accessibilité du site Trouve Ton Artisan."
            );
        }
    }, []);

    return (
        <Container className="legal-page">
            <h1>Déclaration d'accessibilité</h1>

            <p>
                Trouve Ton Artisan s'engage à rendre son site accessible au plus grand nombre,
                conformément aux bonnes pratiques du Référentiel Général d'Amélioration de
                l'Accessibilité (RGAA). Cette page présente l'état d'avancement de cette démarche.
            </p>

            <h2>État de conformité</h2>
            <p>
                Le site Trouve Ton Artisan est en <strong>conformité partielle</strong> avec les
                référentiels d'accessibilité. Un audit RGAA complet par un organisme tiers n'a pas
                encore été réalisé, mais plusieurs bonnes pratiques ont d'ores et déjà été mises
                en œuvre lors du développement.
            </p>

            <h2>Ce qui est déjà en place</h2>
            <ul>
                <li>Structure de titres hiérarchisée (h1, h2...) sur l'ensemble des pages.</li>
                <li>
                    Champs de formulaire associés à des étiquettes explicites (
                    <code>label</code>), y compris lorsqu'elles sont visuellement masquées au
                    profit d'un espace visuel réduit.
                </li>
                <li>Texte alternatif sur les images porteuses d'information (logo, photos d'artisans).</li>
                <li>Contraste renforcé et indicateur de focus visible au clavier sur les éléments interactifs.</li>
                <li>Navigation utilisable au clavier sur les principaux parcours (recherche, fiches artisans, formulaire de contact).</li>
            </ul>

            <h2>Axes d'amélioration identifiés</h2>
            <p>
                Le site n'a pas encore fait l'objet d'un audit RGAA formalisé ni de tests avec des
                utilisateurs de technologies d'assistance (lecteurs d'écran). Certains points
                restent donc à vérifier ou améliorer, notamment le contraste de certains éléments
                secondaires, le comportement de certains composants interactifs (menus, fenêtres
                modales) avec un lecteur d'écran, et l'ajout d'un lien d'évitement en début de
                page.
            </p>

            <h2>Nous contacter</h2>
            <p>
                Si vous rencontrez une difficulté d'accès à un contenu ou une fonctionnalité du
                site, vous pouvez nous en informer à l'adresse{" "}
                <a href="mailto:sphereweb.28@gmail.com">sphereweb.28@gmail.com</a> afin
                que nous puissions vous orienter vers une solution accessible et améliorer le
                site.
            </p>
        </Container>
    );
}
