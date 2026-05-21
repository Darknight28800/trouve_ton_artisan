import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5001/api",
});

// 🔐 Ajout automatique du token dans toutes les requêtes
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;

// 🟩 Récupérer tous les artisans
export async function getArtisans() {
    const response = await api.get("/artisans");
    return response.data;
}

// 🟩 Recherche d'artisans
export async function searchArtisans(query) {
    const response = await api.get(`/artisans?search=${encodeURIComponent(query)}`);
    return response.data;
}

// 🟥 Récupérer les stats admin
export async function getAdminStats() {
    const response = await api.get("/admin/stats");
    return response.data;
}

// 🟥 Supprimer un message (admin)
export async function deleteMessage(id) {
    const response = await api.delete(`/contact/${id}`);
    return response.data;
}

