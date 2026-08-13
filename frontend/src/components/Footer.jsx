import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <p>
                <Link to="/mentions-legales">Mentions légales</Link> •
                <Link to="/donnees-personnelles">Données personnelles</Link> •
                <Link to="/accessibilite">Accessibilité</Link> •
                <Link to="/cookies">Cookies</Link>
            </p>
            <p>
                11 bis hameau de Dommarville<br />
                28800 Sancheville<br />
                France<br />
                +33 6 58 16 86 89
            </p>
        </footer>
    );
}

