import { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!query.trim()) return;
        onSearch(query.trim());
    }

    return (
        <form onSubmit={handleSubmit} className="search-container">
            <input
                type="text"
                placeholder="Rechercher un artisan..."
                className="search-input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="search-button">
                Recherche
            </button>
        </form>
    );
}

