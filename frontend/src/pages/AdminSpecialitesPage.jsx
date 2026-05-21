import { useEffect, useState } from "react";
import api from "../services/api";
import AdminSpecialiteForm from "../components/AdminSpecialiteForm";
import "../styles/pages/AdminSpecialites.scss";
import AdminLayout from "../layout/AdminLayout";

export default function AdminSpecialitesPage() {
    const [specialites, setSpecialites] = useState([]);
    const [categories, setCategories] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [specialiteToEdit, setSpecialiteToEdit] = useState(null);

    const loadSpecialites = () => {
        api.get("/specialites").then((res) => setSpecialites(res.data));
    };

    const loadCategories = () => {
        api.get("/categories").then((res) => setCategories(res.data));
    };

    useEffect(() => {
        loadSpecialites();
        loadCategories();
    }, []);

    const handleSave = async (data) => {
        try {
        if (specialiteToEdit) {
            await api.put(`/specialites/${specialiteToEdit.id}`, data);
        } else {
            await api.post("/specialites", data);
        }

        setShowForm(false);
        setSpecialiteToEdit(null);
        loadSpecialites();
        } catch (error) {
        console.error("Erreur sauvegarde spécialité :", error);
        }
    };

    const handleDelete = async (id) => {
        try {
        await api.delete(`/specialites/${id}`);
        loadSpecialites();
        } catch (error) {
        console.error("Erreur suppression spécialité :", error);
        }
    };

    return (
        <AdminLayout>
            <div className="admin-specialites">
                <h1>Gestion des spécialités</h1>

        <button
            className="btn-add"
            onClick={() => {
            setSpecialiteToEdit(null);
            setShowForm(true);
            }}
        >
            + Ajouter une spécialité
        </button>

        {showForm && (
            <div className="modal-overlay" onClick={() => setShowForm(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <AdminSpecialiteForm
                specialite={specialiteToEdit}
                categories={categories}
                onSubmit={handleSave}
                onCancel={() => setShowForm(false)}
                />
            </div>
            </div>
        )}

        <div className="specialites-list">
            {specialites.map((s) => (
            <div className="specialite-card" key={s.id}>
                <h2>{s.nom}</h2>
                <p className="categorie">
                Catégorie : {s.Categorie?.nom || "Non définie"}
                </p>

                <div className="actions">
                <button
                    className="btn-edit"
                    onClick={() => {
                    setSpecialiteToEdit(s);
                    setShowForm(true);
                    }}
                >
                    Modifier
                </button>

                <button
                    className="btn-delete"
                    onClick={() => handleDelete(s.id)}
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
