import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/components/AdminArtisanForm.scss";


export default function AdminArtisanForm({ artisan, onSubmit, onCancel }) {
    const [form, setForm] = useState({
        nom: artisan?.nom || "",
        email: artisan?.email || "",
        telephone: artisan?.telephone || "",
        specialite_id: artisan?.specialite_id || "",
    });

    const [specialites, setSpecialites] = useState([]);

    // Charger les spécialités
    useEffect(() => {
        api.get("/specialites").then((res) => setSpecialites(res.data));
    }, []);

    // Mise à jour des champs
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <div className="admin-artisan-form">
        <h2>{artisan ? "Modifier l'artisan" : "Ajouter un artisan"}</h2>

        <form onSubmit={handleSubmit}>
            <label htmlFor="artisan-nom">Nom</label>
            <input
            id="artisan-nom"
            type="text"
            name="nom"
            value={form.nom}
            onChange={handleChange}
            required
            />

            <label htmlFor="artisan-email">Email</label>
            <input
            id="artisan-email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            />

            <label htmlFor="artisan-telephone">Téléphone</label>
            <input
            id="artisan-telephone"
            type="text"
            name="telephone"
            value={form.telephone}
            onChange={handleChange}
            required
            />

            <label htmlFor="artisan-specialite">Spécialité</label>
            <select
            id="artisan-specialite"
            name="specialite_id"
            value={form.specialite_id}
            onChange={handleChange}
            required
            >
            <option value="">Sélectionner une spécialité</option>
            {specialites.map((s) => (
                <option key={s.id} value={s.id}>
                {s.nom} — {s.Categorie?.nom}
                </option>
            ))}
            </select>

            <div className="actions">
            <button type="submit" className="btn-submit">
                {artisan ? "Enregistrer" : "Ajouter"}
            </button>

            <button type="button" className="btn-cancel" onClick={onCancel}>
                Annuler
            </button>
            </div>
        </form>
        </div>
    );
}
