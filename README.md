# 🛠️ TrouveTonArtisan — Application Web Fullstack

TrouveTonArtisan est une application web permettant de rechercher facilement un artisan, filtrer par catégorie ou spécialité, consulter une fiche détaillée et envoyer un message via un formulaire de contact.  
Le site est entièrement responsive, ergonomique et pensé pour une navigation fluide.

---

## 🎯 1. Fonctionnalités principales

- Recherche d’artisans  
- Filtres par catégorie et spécialité  
- Fiche artisan détaillée  
- Formulaire de contact  
- Pages légales complètes  
- Responsive mobile / tablette / desktop  

---

## 🛠️ 2. Technologies utilisées

### Frontend
- React  
- React Router  
- Axios  
- SCSS modulaire  
- Vite  

### Backend
- Node.js  
- Express  
- Sequelize  
- MySQL / MariaDB  

---

## 📂 3. Structure du projet

```
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
```

---

## ⚙️ 4. Installation du projet

### A. Cloner le projet

```bash
git clone <ton-repo>
cd trouve-ton-artisan
```

---

## 🚀 5. Backend — Installation & lancement

### Installer les dépendances

```bash
cd backend
npm install
```

### Configurer la base de données

Créer un fichier `.env` :

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=trouvetonartisan
DB_DIALECT=mysql
PORT=5001
```

### Lancer le serveur

```bash
npm start
```

Backend disponible sur :  
👉 http://localhost:5001

---

## 💻 6. Frontend — Installation & lancement

### Installer les dépendances

```bash
cd frontend
npm install
```

### Lancer le serveur

```bash
npm run dev
```

Frontend disponible sur :  
👉 http://localhost:5173

---

## 🔗 7. Routes API

### Artisans
- GET /artisans  
- GET /artisans/top  
- GET /artisans/:id  

### Catégories
- GET /categories  

### Spécialités
- GET /specialites  

---

## 📱 8. Fonctionnalités détaillées

### Page d’accueil
- Étapes explicatives  
- Artisans recommandés  
- Artisans du mois  
- Catégories  

### Page liste artisans
- Recherche  
- Filtres  
- Affichage dynamique  

### Page artisan
- Détails  
- Image  
- Note  
- Spécialité  
- Localisation  
- Formulaire de contact  

### Pages légales
- Mentions légales  
- Données personnelles  
- Accessibilité  
- Cookies  

### Responsive complet
- Mobile  
- Tablette  
- Desktop  

---

## 🎨 9. Design & UX

- Thème bleu professionnel  
- Cartes avec ombres modernes  
- Boutons interactifs  
- Sections aérées  
- Navigation intuitive  

---

## 🎨 9.1 Maquette Figma (Prototype interactif)

Vous pouvez consulter la maquette complète du projet ici :

👉 **Prototype Figma :**  
https://www.figma.com/proto/IuVMTOHAupiAfh1FKt04XA/Projet-Maquette-ProBeat?node-id=290-1132&t=xFWn4ah0qnxDh9sL-1

Ce lien permet de :
- naviguer dans les écrans comme un vrai site  
- visualiser le design responsive  
- comprendre la structure UX 

---

## 🧪 10. Tests réalisés

- Vérification console (aucune erreur)  
- Vérification API (toutes les routes OK)  
- Vérification responsive  
- Vérification navigation  
- Vérification cohérence visuelle  

---

## ✔ 10.1 Validation W3C

### HTML
Le fichier `index.html` a été validé via le validateur officiel du W3C.  
Aucune erreur n’a été détectée.

📸 *Capture d’écran de la validation HTML (W3C)*  
*(voir PDF ou dossier /captures)*

### CSS
Le fichier CSS compilé a été validé via le validateur CSS du W3C.  
Aucune erreur n’a été détectée.

📸 *Capture d’écran de la validation CSS (W3C)*  
*(voir dossier W3C)*

---


## 📸 11. Captures d’écran

*(À insérer dans ton PDF ou ton dépôt CEF)*

- Version desktop  
- Version mobile  
- Page artisans  
- Page artisan  
- Page contact  

---

## 📦 12. Livrables

Le ZIP final doit contenir :

- /frontend  
- /backend  
- README.md  
- Captures d’écran  
- PDF explicatif (si demandé)  

---

## 🏁 13. Conclusion

Le projet TrouveTonArtisan répond à l’ensemble des exigences du brief :

- Site complet  
- API fonctionnelle  
- Responsive  
- Design cohérent  
- Code propre  
- Pages légales  
- Formulaire de contact  

---

