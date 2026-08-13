import { useEffect } from "react";
import Container from "../components/Container";

export default function LegalMentions() {

    useEffect(() => {
        document.title = "Trouve Ton Artisan - Mentions légales";

        const meta = document.querySelector("meta[name='description']");
        if (meta) {
            meta.setAttribute(
                "content",
                "Mentions légales du site Trouve Ton Artisan : éditeur, hébergeur, propriété intellectuelle et responsabilité."
            );
        }
    }, []);

    return (
        <Container className="legal-page">
            <h1>Mentions légales</h1>

            <p>
                Conformément aux dispositions des articles 6-III et 19 de la loi n°2004-575
                du 21 juin 2004 pour la confiance dans l'économie numérique, il est porté à la
                connaissance des utilisateurs et visiteurs du site Trouve Ton Artisan les
                présentes mentions légales.
            </p>

            <h2>Éditeur du site</h2>
            <p>
                Le site Trouve Ton Artisan est édité par :<br />
                [Raison sociale à compléter] — [forme juridique, ex. SAS / auto-entreprise]<br />
                Siège social : 11 bis hameau de Dommarville, 28800 Sancheville<br />
                SIRET : [numéro SIRET à compléter]<br />
                Directeur de la publication : [nom du responsable de publication]<br />
                Téléphone : +33 6 58 16 86 89<br />
                Contact : <a href="mailto:sphereweb.28@gmail.com">sphereweb.28@gmail.com</a>
            </p>

            <h2>Hébergement</h2>
            <p>
                Le site est hébergé par : [nom de l'hébergeur à compléter]<br />
                Adresse : [adresse de l'hébergeur à compléter]<br />
                Contact : [contact de l'hébergeur à compléter]
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
                L'ensemble des éléments présents sur le site Trouve Ton Artisan (textes, images,
                logos, mise en page, code source) est protégé par le droit d'auteur et le droit
                des marques. Toute reproduction, représentation, modification ou diffusion, totale
                ou partielle, sans autorisation préalable, est interdite et pourrait constituer
                une contrefaçon.
            </p>
            <p>
                Les artisans référencés sur le site restent propriétaires des informations et
                images qu'ils fournissent ou qui sont publiées à leur sujet.
            </p>

            <h2>Liens hypertextes</h2>
            <p>
                Le site Trouve Ton Artisan peut contenir des liens vers des sites tiers (sites
                internet des artisans référencés, par exemple). L'éditeur n'exerce aucun contrôle
                sur ces sites et décline toute responsabilité quant à leur contenu.
            </p>

            <h2>Responsabilité</h2>
            <p>
                Trouve Ton Artisan met en relation des utilisateurs et des artisans indépendants.
                L'éditeur n'est pas partie aux échanges ou prestations conclus entre un utilisateur
                et un artisan contacté via le site, et ne saurait être tenu responsable de la
                qualité, de la conformité ou de l'exécution des prestations proposées par les
                artisans référencés.
            </p>
            <p>
                L'éditeur s'efforce de fournir des informations aussi précises que possible, mais
                ne peut garantir l'exactitude, l'exhaustivité ou l'actualité des informations
                diffusées sur le site.
            </p>

            <h2>Droit applicable</h2>
            <p>
                Les présentes mentions légales sont soumises au droit français. En cas de litige
                et à défaut d'accord amiable, les tribunaux français seront seuls compétents.
            </p>
        </Container>
    );
}
