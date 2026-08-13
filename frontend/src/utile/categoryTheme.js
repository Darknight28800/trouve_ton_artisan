// Couleur d'accent par catégorie, pour donner une identité visuelle à chaque
// section (pastilles d'accueil, fond de la page catégorie). Les 4 catégories
// du référentiel ont une couleur dédiée ; toute catégorie ajoutée plus tard
// reçoit une couleur dérivée de son nom (répartition stable sur la roue
// chromatique), pour rester cohérent sans devoir maintenir la liste à jour.
const THEMES = {
    "alimentation": { accent: "#f59e0b", accent2: "#ea580c" }, // ambre/orange
    "bâtiment": { accent: "#c2703d", accent2: "#7c4a2d" },      // terracotta
    "fabrication": { accent: "#0d9488", accent2: "#0f766e" },   // émeraude
    "services": { accent: "#0ea5e9", accent2: "#2563eb" },      // bleu ciel
};

function hashHue(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash) % 360;
}

export function getCategoryTheme(nom = "") {
    const key = nom.trim().toLowerCase();
    if (THEMES[key]) return THEMES[key];

    const hue = hashHue(key);
    return {
        accent: `hsl(${hue}, 70%, 55%)`,
        accent2: `hsl(${(hue + 30) % 360}, 65%, 40%)`,
    };
}
