import { useState } from "react";
import api from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import "../styles/pages/AdminLogin.scss";

export default function AdminLoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const res = await api.post("/auth/login", { email, password });

            // Vérifier que c'est bien un admin
            if (res.data.role !== "admin") {
                setError("Accès réservé aux administrateurs");
                return;
            }

            // Stocker token + rôle
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("role", res.data.role);

            navigate("/admin/messages"); // ou /admin selon ton routing
        } catch (err) {
            console.error(err);
            setError("Identifiants incorrects");
        }
    };

    return (
            <div className="admin-login">
                <Link to="/" className="back-to-site">
                    ← Retour au site
                </Link>

                <h1>Connexion Admin</h1>

            <form className="login-box" onSubmit={handleLogin}>
                <label htmlFor="login-email">Email admin</label>
                <input
                    id="login-email"
                    type="email"
                    placeholder="Email admin"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="login-password">Mot de passe</label>
                <input
                    id="login-password"
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                {error && <p className="error">{error}</p>}

                <button type="submit">Se connecter</button>
            </form>
        </div>
    );
}
