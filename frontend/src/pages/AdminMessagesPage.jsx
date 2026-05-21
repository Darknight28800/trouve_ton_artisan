import { useEffect, useState } from "react";
import api from "../services/api";
import AdminLayout from "../layout/AdminLayout";
import "../styles/pages/AdminMessages.scss";

export default function AdminMessages() {
    const [messages, setMessages] = useState([]);
    const [selectedMessage, setSelectedMessage] = useState(null);

    useEffect(() => {
        api.get("/contact", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then((res) => setMessages(res.data))
        .catch(err => console.error("Erreur GET /contact :", err.response?.data || err));
    }, []);

    async function handleDelete(id) {
        if (!confirm("Supprimer ce message ?")) return;

        try {
            await api.delete(`/contact/${id}`);

            setMessages((prev) => prev.filter((m) => m.id !== id));

            if (selectedMessage?.id === id) {
                setSelectedMessage(null);
            }

        } catch (err) {
            console.error("Erreur suppression :", err.response?.data || err);
        }
    }

    return (
        <AdminLayout>
            <div className="admin-messages">
                <h1>Messages reçus</h1>

                {messages.length === 0 ? (
                    <p className="empty">Aucun message pour le moment.</p>
                ) : (
                    <div className="messages-list">
                        {messages.map((m) => (
                            <div className="message-card" key={m.id}>
                                <div className="header">
                                    <h2>{m.nom} {m.prenom}</h2>
                                    <span className="date">
                                        {new Date(m.createdAt).toLocaleString()}
                                    </span>
                                </div>

                                <div className="info">
                                    <p><strong>Email :</strong> {m.email}</p>
                                    <p><strong>Téléphone :</strong> {m.telephone}</p>
                                    <p><strong>Artisan :</strong> {m.artisanId}</p>
                                </div>

                                <div className="message">
                                    {m.message}
                                </div>

                                <div className="actions">
                                    <button 
                                        className="btn-view"
                                        onClick={() => setSelectedMessage(m)}
                                    >
                                        Voir le message
                                    </button>

                                    <button 
                                        className="btn-delete"
                                        onClick={() => handleDelete(m.id)}
                                    >
                                        Supprimer
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {selectedMessage && (
                    <div className="modal-overlay" onClick={() => setSelectedMessage(null)}>
                        <div className="modal" onClick={(e) => e.stopPropagation()}>
                            <h2>{selectedMessage.nom} {selectedMessage.prenom}</h2>

                            <p><strong>Email :</strong> {selectedMessage.email}</p>
                            <p><strong>Téléphone :</strong> {selectedMessage.telephone}</p>
                            <p><strong>Artisan :</strong> {selectedMessage.artisanId}</p>

                            <div className="modal-message">
                                {selectedMessage.message}
                            </div>

                            <div className="modal-actions">
                                <button 
                                    className="btn-delete"
                                    onClick={() => handleDelete(selectedMessage.id)}
                                >
                                    Supprimer
                                </button>

                                <button 
                                    className="btn-close" 
                                    onClick={() => setSelectedMessage(null)}
                                >
                                    Fermer
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}
