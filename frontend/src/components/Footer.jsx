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
                101 cours Charlemagne<br />
                CS 20033<br />
                69269 LYON CEDEX 02<br />
                France<br />
                +33 (0)4 26 73 40 00
            </p>
        </footer>
    );
}

