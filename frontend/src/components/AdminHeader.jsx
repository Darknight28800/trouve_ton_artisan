import { Link } from "react-router-dom";
import "../styles/components/AdminHeader.scss";

export default function AdminHeader() {
    const isLogged = !!localStorage.getItem("token");

    function handleLogout() {
        localStorage.removeItem("token");
        window.location.href = "/admin/login";
    }

    return (
        <header className="admin-header">
            <div className="left">
                <h2>Admin</h2>

                <nav>
                    <Link to="/admin/messages">Messages</Link>
                </nav>
            </div>

            {/* Si connecté → bouton déconnexion */}
            {isLogged ? (
                <button className="logout-btn" onClick={handleLogout}>
                    Déconnexion
                </button>
            ) : (
                /* Sinon → bouton connexion */
                <Link to="/login" className="login-btn">
                    Connexion
                </Link>
            )}
        </header>
    );
}
