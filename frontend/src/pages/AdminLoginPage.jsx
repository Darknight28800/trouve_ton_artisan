import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import "../styles/pages/AdminLogin.scss";

export default function AdminLoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
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
                <h1>Connexion Admin</h1>

            <div className="login-box">
                <input
                    type="email"
                    placeholder="Email admin"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {error && <p className="error">{error}</p>}

                <button onClick={handleLogin}>Se connecter</button>
            </div>
        </div>
    );
}
