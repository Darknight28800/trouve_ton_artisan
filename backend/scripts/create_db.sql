CREATE DATABASE IF NOT EXISTS trouve_ton_artisan CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE trouve_ton_artisan;

CREATE TABLE categorie (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL
);

CREATE TABLE specialite (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    categorie_id INT NOT NULL,
    FOREIGN KEY (categorie_id) REFERENCES categorie(id)
);

CREATE TABLE artisan (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    note FLOAT NOT NULL,
    ville VARCHAR(255) NOT NULL,
    a_propos TEXT NOT NULL,
    email VARCHAR(255) NOT NULL,
    site_web VARCHAR(255),
    top BOOLEAN DEFAULT FALSE,
    specialite_id INT NOT NULL,
    FOREIGN KEY (specialite_id) REFERENCES specialite(id)
);
