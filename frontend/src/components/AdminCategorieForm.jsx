import { useState } from "react";
import "../styles/components/AdminCategorieForm.scss";

export default function AdminCategorieForm({ categorie, onSubmit, onCancel }) {
    const [form, setForm] = useState({
        nom: categorie?.nom || "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <div className="admin-categorie-form">
        <h2>{categorie ? "Modifier la catégorie" : "Ajouter une catégorie"}</h2>

        <form onSubmit={handleSubmit}>
            <label>Nom de la catégorie</label>
            <input
            type="text"
            name="nom"
            value={form.nom}
            onChange={handleChange}
            required
            />

            <div className="actions">
            <button type="submit" className="btn-save">
                {categorie ? "Enregistrer" : "Ajouter"}
            </button>

            <button type="button" className="btn-cancel" onClick={onCancel}>
                Annuler
            </button>
            </div>
        </form>
        </div>
    );
}
