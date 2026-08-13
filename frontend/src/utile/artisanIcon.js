// Icône représentant chaque spécialité, utilisée à la place d'une photo
// (visuel généré, sans dépendance à un service d'images externe).
const ICONS = {
    "boucher": "🥩",
    "boulanger": "🥖",
    "chocolatier": "🍫",
    "traiteur": "🍽️",
    "pâtissier": "🍰",
    "poissonnier": "🐟",
    "fromager": "🧀",

    "chauffagiste": "🔥",
    "electricien": "⚡",
    "électricien": "⚡",
    "menuisier": "🪚",
    "plombier": "🔧",
    "maçon": "🧱",
    "peintre": "🎨",
    "couvreur": "🏠",

    "bijoutier": "💍",
    "couturier": "🧵",
    "ferronier": "⚒️",
    "ébéniste": "🪑",
    "céramiste": "🏺",

    "coiffeur": "💇",
    "esthéticienne": "💆",
    "photographe": "📷",
    "mécanicien": "🚗",
    "fleuriste": "💐",
    "toiletteur": "🐾",
    "webdesign": "💻",
};

const CATEGORY_FALLBACK = {
    "alimentation": "🍴",
    "bâtiment": "🛠️",
    "fabrication": "🔨",
    "services": "✨",
};

export function getSpecialiteIcon(specialite = "", categorie = "") {
    const key = specialite.trim().toLowerCase();
    if (ICONS[key]) return ICONS[key];

    const catKey = categorie.trim().toLowerCase();
    return CATEGORY_FALLBACK[catKey] || "🛠️";
}
