import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="site-footer">
            <p className="site-footer-links">
                <Link to="/mentions-legales">Mentions légales</Link>
                <Link to="/donnees-personnelles">Données personnelles</Link>
                <Link to="/accessibilite">Accessibilité</Link>
                <Link to="/cookies">Cookies</Link>
            </p>
            <p className="site-footer-info">
                28800 Sancheville<br />
                France<br />
                +33 6 58 16 86 89
            </p>
        </footer>
    );
}

