import { useEffect, useState } from "react";
import api from "../services/api";
import AdminCategorieForm from "../components/AdminCategorieForm";
import "../styles/pages/AdminCategories.scss";
import AdminLayout from "../layout/AdminLayout";


export default function AdminCategoriesPage() {
    const [categories, setCategories] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [categorieToEdit, setCategorieToEdit] = useState(null);

    const loadCategories = () => {
        api.get("/categories").then((res) => setCategories(res.data));
    };

    useEffect(() => {
        loadCategories();
    }, []);

    const handleSave = async (data) => {
        try {
        if (categorieToEdit) {
            await api.put(`/categories/${categorieToEdit.id}`, data);
        } else {
            await api.post("/categories", data);
        }

        setShowForm(false);
        setCategorieToEdit(null);
        loadCategories();
        } catch (error) {
        console.error("Erreur sauvegarde catégorie :", error);
        }
    };

    const handleDelete = async (id) => {
        try {
        await api.delete(`/categories/${id}`);
        loadCategories();
        } catch (error) {
        console.error("Erreur suppression catégorie :", error);
        }
    };

    return (
        <AdminLayout>
            <div className="admin-categories">
                <h1>Gestion des catégories</h1>

        <button
            className="btn-add"
            onClick={() => {
            setCategorieToEdit(null);
            setShowForm(true);
            }}
        >
            + Ajouter une catégorie
        </button>

        {showForm && (
            <div className="modal-overlay" onClick={() => setShowForm(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <AdminCategorieForm
                categorie={categorieToEdit}
                onSubmit={handleSave}
                onCancel={() => setShowForm(false)}
                />
            </div>
            </div>
        )}

        <div className="categories-list">
            {categories.map((c) => (
            <div className="categorie-card" key={c.id}>
                <h2>{c.nom}</h2>

                <div className="actions">
                <button
                    className="btn-edit"
                    onClick={() => {
                    setCategorieToEdit(c);
                    setShowForm(true);
                    }}
                >
                    Modifier
                </button>

                <button
                    className="btn-delete"
                    onClick={() => handleDelete(c.id)}
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
