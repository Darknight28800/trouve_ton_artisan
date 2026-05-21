USE trouve_ton_artisan;

INSERT INTO categorie (nom) VALUES
('Alimentation'), 
('Bâtiment'), 
('Fabrication'), 
('Services');

INSERT INTO specialite (nom, categorie_id) VALUES
('Boucher', 1),
('Boulanger', 1),
('Chocolatier', 1),
('Traiteur', 1),
('Chauffagiste', 2),
('Electricien', 2),
('Menuisier', 2),
('Plombier', 2),
('Bijoutier', 3),
('Couturier', 3),
('Ferronier', 3),
('Coiffeur', 4),
('Fleuriste', 4),
('Toiletteur', 4),
('Webdesign', 4);

INSERT INTO artisan (nom, note, ville, a_propos, email, site_web, [TOP], specialite_id) VALUES
('Boucherie Dumont', 4.5, 'Lyon', 'Lorem ipsum...', 'boucherie.dumond@gmail.com', NULL, TRUE, 1),
('Au pain chaud', 4.8, 'Montélimar', 'Lorem ipsum...', 'aupainchaud@hotmail.com', NULL, TRUE, 2),
('Chocolaterie Labbé', 4.9, 'Lyon', 'Lorem ipsum...', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', TRUE, 3),
('Traiteur Truchon', 4.1, 'Lyon', 'Lorem ipsum...', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', FALSE, 4),
('Orville Salmons', 5, 'Evian', 'Lorem ipsum...', 'o-salmons@live.com', NULL, FALSE, 5),
('Mont Blanc Electricité', 4.5, 'Chamonix', 'Lorem ipsum...', 'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', FALSE, 6),
('Boutot & fils', 4.7, 'Bourg-en-bresse', 'Lorem ipsum...', 'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', FALSE, 7),
('Vallis Bellemare', 4, 'Vienne', 'Lorem ipsum...', 'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', FALSE, 8),
('Claude Quinn', 4.2, 'Aix-les-bains', 'Lorem ipsum...', 'claude.quinn@gmail.com', NULL, FALSE, 9),
('Amitee Lécuyer', 4.5, 'Annecy', 'Lorem ipsum...', 'a.amitee@hotmail.com', 'https://lecuyer-couture.com', FALSE, 10),
('Ernest Carignan', 5, 'Le Puy-en-Velay', 'Lorem ipsum...', 'e-carigan@hotmail.com', NULL, FALSE, 11),
('Royden Charbonneau', 3.8, 'Saint-Priest', 'Lorem ipsum...', 'r.charbonneau@gmail.com', NULL, FALSE, 12),
('Leala Dennis', 3.8, 'Chambéry', 'Lorem ipsum...', 'l.dennos@hotmail.fr', 'https://coiffure-leala-chambery.fr', FALSE, 12),
('C''est sup''hair', 4.1, 'Romans-sur-Isère', 'Lorem ipsum...', 'sup-hair@gmail.com', 'https://sup-hair.fr', FALSE, 12),
('Le monde des fleurs', 4.6, 'Annonay', 'Lorem ipsum...', 'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', FALSE, 13),
('Valérie Laderoute', 4.5, 'Valence', 'Lorem ipsum...', 'v-laredoute@gmail.com', NULL, FALSE, 14),
('CM Graphisme', 4.4, 'Valence', 'Lorem ipsum...', 'contact@cm-graphisme.com', 'https://cm-graphisme.com', FALSE, 15);
