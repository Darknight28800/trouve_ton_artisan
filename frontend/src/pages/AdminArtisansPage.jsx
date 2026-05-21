import { useEffect, useState } from "react";
import api from "../services/api";
import AdminArtisanForm from "../components/AdminArtisanForm";
import "../styles/pages/AdminArtisans.scss";
import AdminLayout from "../layout/AdminLayout";


export default function AdminArtisansPage() {
    const [artisans, setArtisans] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [artisanToEdit, setArtisanToEdit] = useState(null);

    // Charger artisans
    const loadArtisans = () => {
        api.get("/artisans").then((res) => setArtisans(res.data));
    };

    useEffect(() => {
        loadArtisans();
    }, []);

    // Soumission du formulaire (ajout ou modification)
    const handleSave = async (data) => {
        try {
        if (artisanToEdit) {
            // Modification
            await api.put(`/artisans/${artisanToEdit.id}`, data);
        } else {
            // Ajout
            await api.post("/artisans", data);
        }

        setShowForm(false);
        setArtisanToEdit(null);
        loadArtisans(); // rafraîchir la liste
        } catch (error) {
        console.error("Erreur sauvegarde artisan :", error);
        }
    };

    // Supprimer artisan
    const handleDelete = async (id) => {
        if (!confirm("Supprimer cet artisan ?")) return;

        try {
        await api.delete(`/artisans/${id}`);
        loadArtisans();
        } catch (error) {
        console.error("Erreur suppression artisan :", error);
        }
    };

    return (
        <AdminLayout>
            <div className="admin-artisans">
                <h1>Gestion des artisans</h1>

        <button
            className="btn-add"
            onClick={() => {
            setArtisanToEdit(null);
            setShowForm(true);
            }}
        >
            + Ajouter un artisan
        </button>

        {/* POPUP FORM */}
        {showForm && (
            <div className="modal-overlay" onClick={() => setShowForm(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <AdminArtisanForm
                artisan={artisanToEdit}
                onSubmit={handleSave}
                onCancel={() => setShowForm(false)}
                />
            </div>
            </div>
        )}

        <div className="artisans-list">
            {artisans.map((a) => (
            <div className="artisan-card" key={a.id}>
                <div className="header">
                <h2>{a.nom}</h2>
                <span className="specialite">
                    {a.Specialite?.nom} — {a.Specialite?.Categorie?.nom}
                </span>
                </div>

                <div className="info">
                <p><strong>Email :</strong> {a.email}</p>
                <p><strong>Téléphone :</strong> {a.telephone}</p>
                </div>

                <div className="actions">
                <button
                    className="btn-edit"
                    onClick={() => {
                    setArtisanToEdit(a);
                    setShowForm(true);
                    }}
                >
                    Modifier
                </button>

                <button
                    className="btn-delete"
                    onClick={() => handleDelete(a.id)}
                >
                    Supprimer
                </button>
                </div>
            </div>
            ))}
        </div>
        </div>
        </AdminLayout>
    );
}
