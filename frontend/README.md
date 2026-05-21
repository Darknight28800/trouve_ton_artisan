🎯 1. Présentation du projet
TrouveTonArtisan est une application web permettant aux utilisateurs de :

rechercher un artisan

filtrer par catégorie ou spécialité

consulter la fiche détaillée d’un artisan

envoyer un message via un formulaire de contact

naviguer dans un site responsive, ergonomique et accessible

Le projet repose sur une architecture complète comprenant :

un frontend React + Vite

un backend Node.js + Express + Sequelize

une base de données MySQL


*************************************************************************************************************


🛠️ 2. Technologies utilisées
Frontend
React

React Router

Axios

SCSS (architecture modulaire)

Vite

Backend
Node.js

Express

Sequelize

MySQL / MariaDB


*************************************************************************************************************


📂 3. Structure du projet
Code
/backend
  /config
  /controllers
  /models
  /routes
  /migrations
  server.js

/frontend
  /src
    /components
    /pages
    /styles
    /assets
    App.jsx
    main.jsx
  index.html


  *************************************************************************************************************


⚙️ 4. Installation du projet
A. Cloner le projet
bash
git clone <ton-repo>
cd projet
🚀 5. Installation & lancement du backend
Installer les dépendances
bash
cd backend
npm install
Configurer la base de données
Créer un fichier .env :

Code
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=trouvetonartisan
DB_DIALECT=mysql
PORT=5000
Lancer le serveur
bash
npm start
Backend disponible sur :
👉 http://localhost:5001


*************************************************************************************************************


💻 6. Installation & lancement du frontend
Installer les dépendances
bash
cd frontend
npm install
Lancer le serveur
bash
npm run dev
Frontend disponible sur :
👉 http://localhost:5173


*************************************************************************************************************


🔗 7. Routes API
Artisans
GET /artisans

GET /artisans/top

GET /artisans/:id

Catégories
GET /categories

Spécialités
GET /specialites


*************************************************************************************************************


📱 8. Fonctionnalités du site
Page d’accueil
étapes explicatives

artisans recommandés

artisans du mois

catégories

Page liste artisans
recherche

filtres

affichage dynamique

Page artisan
détails

image

note

spécialité

localisation

formulaire de contact intégré

Pages légales
mentions légales

données personnelles

accessibilité

cookies

Header + Footer
identiques sur toutes les pages

Responsive complet
mobile

tablette

desktop


*************************************************************************************************************


🎨 9. Design & UX
Thème bleu professionnel

Cartes avec ombres modernes

Boutons interactifs

Sections aérées

Navigation intuitive

Responsive optimisé


*************************************************************************************************************


🧪 10. Tests réalisés
Vérification console (aucune erreur)

Vérification API (toutes les routes OK)

Vérification responsive

Vérification navigation

Vérification cohérence visuelle


*************************************************************************************************************


📸 11. Captures d’écran
(À insérer dans ton PDF ou ton dépôt CEF)

Version desktop

Version mobile

Page artisans

Page artisan

Page contact


*************************************************************************************************************


📦 12. Livrables
Le ZIP final doit contenir :

/frontend

/backend

README.md

captures d’écran

PDF explicatif (si demandé)


*************************************************************************************************************


🏁 13. Conclusion
Le projet TrouveTonArtisan répond à l’ensemble des exigences du brief :

site complet

API fonctionnelle

responsive

design cohérent

code propre

pages légales

formulaire de contact

