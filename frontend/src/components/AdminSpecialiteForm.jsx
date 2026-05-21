import { useState } from "react";
import "../styles/components/AdminSpecialiteForm.scss";

export default function AdminSpecialiteForm({ specialite, categories, onSubmit, onCancel }) {
    const [form, setForm] = useState({
        nom: specialite?.nom || "",
        categorieId: specialite?.categorieId || "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <div className="admin-specialite-form">
        <h2>{specialite ? "Modifier la spécialité" : "Ajouter une spécialité"}</h2>

        <form onSubmit={handleSubmit}>
            <label>Nom de la spécialité</label>
            <input
            type="text"
            name="nom"
            value={form.nom}
            onChange={handleChange}
            required
            />

            <label>Catégorie associée</label>
            <select
            name="categorieId"
            value={form.categorieId}
            onChange={handleChange}
            required
            >
            <option value="">-- Choisir une catégorie --</option>

            {categories.map((c) => (
                <option key={c.id} value={c.id}>
                {c.nom}
                </option>
            ))}
            </select>

            <div className="actions">
            <button type="submit" className="btn-save">
                {specialite ? "Enregistrer" : "Ajouter"}
            </button>

            <button type="button" className="btn-cancel" onClick={onCancel}>
                Annuler
            </button>
            </div>
        </form>
        </div>
    );
}
