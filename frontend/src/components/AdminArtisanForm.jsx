import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/components/AdminArtisanForm.scss";


export default function AdminArtisanForm({ artisan, onSubmit, onCancel }) {
    const [form, setForm] = useState({
        nom: artisan?.nom || "",
        email: artisan?.email || "",
        telephone: artisan?.telephone || "",
        specialiteId: artisan?.specialiteId || "",
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
            <label>Nom</label>
            <input
            type="text"
            name="nom"
            value={form.nom}
            onChange={handleChange}
            required
            />

            <label>Email</label>
            <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            />

            <label>Téléphone</label>
            <input
            type="text"
            name="telephone"
            value={form.telephone}
            onChange={handleChange}
            required
            />

            <label>Spécialité</label>
            <select
            name="specialiteId"
            value={form.specialiteId}
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
