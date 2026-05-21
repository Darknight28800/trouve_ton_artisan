import { useEffect, useState } from "react";
import { getAdminStats } from "../services/api";
import AdminLayout from "../layout/AdminLayout";
import "../styles/pages/AdminDashboard.scss";


export default function AdminDashboardPage() {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        async function loadStats() {
            try {
                const data = await getAdminStats();
                setStats(data);
            } catch (err) {
                console.error("Erreur stats admin :", err);
            }
        }

        loadStats();
    }, []);

    if (!stats) return <p>Chargement...</p>;

    return (
        <AdminLayout>
            <div className="admin-dashboard">
                <h1>Dashboard Admin</h1>

            <div className="stats-grid">
                <div className="stat-card">
                    <h2>{stats.artisans}</h2>
                    <p>Artisans</p>
                </div>

                <div className="stat-card">
                    <h2>{stats.categories}</h2>
                    <p>Catégories</p>
                </div>

                <div className="stat-card">
                    <h2>{stats.specialites}</h2>
                    <p>Spécialités</p>
                </div>

                <div className="stat-card">
                    <h2>{stats.messages}</h2>
                    <p>Messages reçus</p>
                </div>
            </div>
        </div>
        </AdminLayout>
    );
}
