export function getArtisanImage(artisan) {
    const specialite = artisan.Specialite?.nom || "";
    const id = artisan.id || 0;

    // Images multiples par spécialité (libres de droit)
    const images = {
        // --- ALIMENTATION ---
        Boucher: [
        "https://loremflickr.com/640/480/butcher,meat",
        "https://loremflickr.com/640/480/meat,shop",
        "https://loremflickr.com/640/480/butcher,market"
        ],

        Boulanger: [
        "https://loremflickr.com/640/480/bakery,bread",
        "https://loremflickr.com/640/480/bread,artisan",
        "https://loremflickr.com/640/480/bakery,shop"
        ],

        Chocolatier: [
        "https://loremflickr.com/640/480/chocolate",
        "https://loremflickr.com/640/480/chocolate,artisan",
        "https://loremflickr.com/640/480/chocolate,shop"
        ],

        Traiteur: [
        "https://loremflickr.com/640/480/catering,food",
        "https://loremflickr.com/640/480/buffet,food",
        "https://loremflickr.com/640/480/chef,cuisine"
        ],

        Pâtissier: [
        "https://loremflickr.com/640/480/pastry,cake",
        "https://loremflickr.com/640/480/cake,shop",
        "https://loremflickr.com/640/480/dessert,artisan"
        ],

        Poissonnier: [
        "https://loremflickr.com/640/480/fish,seafood",
        "https://loremflickr.com/640/480/seafood,market",
        "https://loremflickr.com/640/480/fish,shop"
        ],

        Fromager: [
        "https://loremflickr.com/640/480/cheese,shop",
        "https://loremflickr.com/640/480/cheese,market",
        "https://loremflickr.com/640/480/fromage"
        ],

        // --- BÂTIMENT ---
        Plombier: [
        "https://loremflickr.com/640/480/plumber,tools",
        "https://loremflickr.com/640/480/plumbing,repair",
        "https://loremflickr.com/640/480/tools,plumber"
        ],

        Électricien: [
        "https://loremflickr.com/640/480/electrician,wires",
        "https://loremflickr.com/640/480/electricity,tools",
        "https://loremflickr.com/640/480/wires,repair"
        ],

        Maçon: [
        "https://loremflickr.com/640/480/mason,construction",
        "https://loremflickr.com/640/480/construction,worker",
        "https://loremflickr.com/640/480/bricks,construction"
        ],

        Menuisier: [
        "https://loremflickr.com/640/480/carpenter,wood",
        "https://loremflickr.com/640/480/woodworking,tools",
        "https://loremflickr.com/640/480/wood,artisan"
        ],

        Peintre: [
        "https://loremflickr.com/640/480/painter,paint",
        "https://loremflickr.com/640/480/painting,tools",
        "https://loremflickr.com/640/480/paint,workshop"
        ],

        Couvreur: [
        "https://loremflickr.com/640/480/roofing,worker",
        "https://loremflickr.com/640/480/roof,construction",
        "https://loremflickr.com/640/480/roof,repair"
        ],

        // --- SERVICES ---
        Coiffeur: [
        "https://loremflickr.com/640/480/hairdresser,salon",
        "https://loremflickr.com/640/480/haircut,barber",
        "https://loremflickr.com/640/480/barber,shop"
        ],

        Esthéticienne: [
        "https://loremflickr.com/640/480/beauty,spa",
        "https://loremflickr.com/640/480/spa,care",
        "https://loremflickr.com/640/480/beauty,care"
        ],

        Photographe: [
        "https://loremflickr.com/640/480/photographer,camera",
        "https://loremflickr.com/640/480/camera,studio",
        "https://loremflickr.com/640/480/photo,studio"
        ],

        Mécanicien: [
        "https://loremflickr.com/640/480/mechanic,garage",
        "https://loremflickr.com/640/480/car,repair",
        "https://loremflickr.com/640/480/garage,tools"
        ],

        // --- ARTISANAT / FABRICATION ---
        Forgeron: [
        "https://loremflickr.com/640/480/blacksmith,forge",
        "https://loremflickr.com/640/480/forge,metal",
        "https://loremflickr.com/640/480/metal,artisan"
        ],

        Ébéniste: [
        "https://loremflickr.com/640/480/woodworking,furniture",
        "https://loremflickr.com/640/480/wood,craft",
        "https://loremflickr.com/640/480/furniture,artisan"
        ],

        Céramiste: [
        "https://loremflickr.com/640/480/ceramics,pottery",
        "https://loremflickr.com/640/480/pottery,artisan",
        "https://loremflickr.com/640/480/ceramic,workshop"
        ],

        Bijoutier: [
        "https://loremflickr.com/640/480/jewelry,artisan",
        "https://loremflickr.com/640/480/jewelry,shop",
        "https://loremflickr.com/640/480/jewels,craft"
        ],

        // --- FALLBACK ---
        default: [
        "https://loremflickr.com/640/480/artisan,workshop",
        "https://loremflickr.com/640/480/shop,artisan",
        "https://loremflickr.com/640/480/craft,workshop"
        ]
    };

    // Sélection du bon tableau d’images
    const list = images[specialite] || images.default;

    // Choix d’une image différente par artisan
    const index = id % list.length;

    return list[index];
}
