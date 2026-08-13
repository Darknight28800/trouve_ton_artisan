import { useEffect } from "react";
import Container from "../components/Container";

export default function LegalData() {

    useEffect(() => {
        document.title = "Trouve Ton Artisan - Données personnelles";

        const meta = document.querySelector("meta[name='description']");
        if (meta) {
            meta.setAttribute(
                "content",
                "Politique de protection des données personnelles du site Trouve Ton Artisan, conforme au RGPD."
            );
        }
    }, []);

    return (
        <Container className="legal-page">
            <h1>Données personnelles</h1>

            <p>
                Trouve Ton Artisan attache une grande importance à la protection de vos données
                personnelles. Cette page décrit quelles données sont collectées, pourquoi, et
                comment vous pouvez exercer vos droits, conformément au Règlement Général sur la
                Protection des Données (RGPD).
            </p>

            <h2>Responsable du traitement</h2>
            <p>
                Le responsable du traitement des données collectées sur ce site est [raison
                sociale / nom à compléter], joignable à l'adresse{" "}
                <a href="mailto:sphereweb.28@gmail.com">sphereweb.28@gmail.com</a>.
            </p>

            <h2>Données collectées</h2>
            <p>Le site collecte les données suivantes :</p>
            <ul>
                <li>
                    <strong>Formulaire de contact</strong> : nom, prénom, téléphone (facultatif),
                    email et message, lorsque vous contactez un artisan ou l'équipe du site.
                </li>
                <li>
                    <strong>Compte administrateur</strong> : adresse email et mot de passe
                    (stocké de façon irréversible, chiffré par hachage) pour les membres de
                    l'équipe autorisés à gérer le site.
                </li>
            </ul>
            <p>
                Le site ne dépose aucun cookie de suivi ni traceur publicitaire (voir la{" "}
                <a href="/cookies">politique de cookies</a>).
            </p>

            <h2>Finalités et base légale</h2>
            <ul>
                <li>
                    Mettre en relation un utilisateur avec un artisan référencé, sur la base de
                    l'exécution d'une demande à laquelle l'utilisateur consent en soumettant le
                    formulaire.
                </li>
                <li>
                    Gérer l'accès sécurisé à l'espace d'administration du site, sur la base de
                    l'intérêt légitime de l'éditeur à sécuriser son service.
                </li>
            </ul>

            <h2>Destinataires des données</h2>
            <p>
                Les informations transmises via le formulaire de contact sont adressées à
                l'artisan concerné (par email) et conservées en base de données pour le suivi de
                la demande. Elles ne sont ni vendues, ni cédées, ni communiquées à des tiers à des
                fins commerciales.
            </p>

            <h2>Durée de conservation</h2>
            <p>
                Les messages de contact sont conservés le temps nécessaire au traitement de la
                demande, puis archivés ou supprimés dans un délai raisonnable. Les comptes
                administrateurs sont conservés tant que la personne concernée exerce une fonction
                sur le site.
            </p>

            <h2>Sécurité</h2>
            <p>
                Les mots de passe administrateurs sont hachés (bcrypt) et ne sont jamais stockés
                ni transmis en clair. L'accès aux fonctionnalités d'administration est protégé par
                authentification et jeton d'accès à durée limitée.
            </p>

            <h2>Vos droits</h2>
            <p>
                Conformément au RGPD, vous disposez d'un droit d'accès, de rectification,
                d'effacement, de limitation, d'opposition et de portabilité sur vos données
                personnelles. Pour exercer ces droits, contactez-nous à l'adresse{" "}
                <a href="mailto:sphereweb.28@gmail.com">sphereweb.28@gmail.com</a>.
            </p>
            <p>
                Vous disposez également du droit d'introduire une réclamation auprès de la
                Commission Nationale de l'Informatique et des Libertés (CNIL) :{" "}
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
                    www.cnil.fr
                </a>
                .
            </p>
        </Container>
    );
}
