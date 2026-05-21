import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/components/header.scss";
import logo from "../assets/logo/Trouve-ton-artisan.png";
import api from "../services/api";

export default function Header() {
    const [open, setOpen] = useState(false);          // Menu burger
    const [adminOpen, setAdminOpen] = useState(false); // Menu admin
    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    // Charger les catégories depuis l'API
    useEffect(() => {
        api.get("/categories")
            .then((res) => setCategories(res.data))
            .catch((err) => console.error("Erreur catégories :", err));
    }, []);

    const handleSearch = () => {
        if (search.trim() !== "") {
            navigate(`/artisans?search=${search}`);
            setOpen(false);
        }
    };

    return (
        <header className="header">

            {/* Logo */}
            <div className="header_logo">
                <Link to="/">
                    <img src={logo} alt="Trouve Ton Artisan" />
                </Link>
            </div>

            {/* Barre de recherche */}
            <div className="header_search">
                <input
                    type="text"
                    placeholder="Rechercher un artisan..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                <button onClick={handleSearch}>Recherche</button>
            </div>

            {/* Navigation */}
            <nav className={`header__nav ${open ? "open" : ""}`}>
                <Link to="/" onClick={() => setOpen(false)}>Accueil</Link>

                {/* Catégories dynamiques */}
                {categories.map((cat) => (
                    <Link
                        key={cat.id}
                        to={`/categorie/${cat.id}`}
                        onClick={() => setOpen(false)}
                    >
                        {cat.nom}
                    </Link>
                ))}

                {/* MENU ADMIN */}
                <div className="admin-menu">
                    <button
                        className="admin-btn"
                        onClick={() => setAdminOpen(!adminOpen)}
                    >
                        Admin ▾
                    </button>

                    {adminOpen && (
                        <div className="admin-dropdown">
                            <Link to="/admin/messages" onClick={() => { setAdminOpen(false); setOpen(false); }}>Messages</Link>
                            <Link to="/admin/artisans" onClick={() => { setAdminOpen(false); setOpen(false); }}>Artisans</Link>
                            <Link to="/admin/categories" onClick={() => { setAdminOpen(false); setOpen(false); }}>Catégories</Link>
                            <Link to="/admin/specialites" onClick={() => { setAdminOpen(false); setOpen(false); }}>Spécialités</Link>
                            <Link to="/admin" onClick={() => { setAdminOpen(false); setOpen(false); }}>Dashboard</Link>
                        </div>
                    )}
                </div>
            </nav>

            {/* Burger menu */}
            <div className="header__burger" onClick={() => setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

        </header>
    );
}
