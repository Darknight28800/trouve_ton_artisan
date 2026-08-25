// Couleur d'accent par catégorie, pour donner une identité visuelle à chaque
// section (pastilles d'accueil, fond de la page catégorie). Les 4 catégories
// du référentiel ont une couleur dédiée ; toute catégorie ajoutée plus tard
// reçoit une couleur dérivée de son nom (répartition stable sur la roue
// chromatique), pour rester cohérent sans devoir maintenir la liste à jour.
// Tons "pierres précieuses" (or, cuivre, émeraude, saphir) : plus profonds et
// moins saturés que des couleurs franches, ils se fondent avec le fond bleu
// nuit/cyan au lieu de jurer avec (contrairement à des teintes "bonbon").
const THEMES = {
    "alimentation": { accent: "#f4b860", accent2: "#b6791b" }, // or / bronze doré
    "bâtiment": { accent: "#d8976a", accent2: "#8a5636" },      // cuivre / bronze
    "fabrication": { accent: "#34d399", accent2: "#0f766e" },   // émeraude / jade
    "services": { accent: "#8b93f8", accent2: "#4c46d1" },      // saphir / indigo
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

    // Même logique "pierre précieuse" que la liste ci-dessus : saturation
    // modérée + luminosité plus basse, pour rester cohérent avec le thème.
    const hue = hashHue(key);
    return {
        accent: `hsl(${hue}, 55%, 58%)`,
        accent2: `hsl(${(hue + 30) % 360}, 55%, 34%)`,
    };
}
