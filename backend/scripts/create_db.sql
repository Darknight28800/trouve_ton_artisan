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
    note FLOAT,
    ville VARCHAR(255),
    a_propos TEXT,
    description TEXT,
    email VARCHAR(255),
    telephone VARCHAR(255),
    site_web VARCHAR(255),
    top BOOLEAN DEFAULT FALSE,
    image VARCHAR(255),
    specialite_id INT NOT NULL,
    FOREIGN KEY (specialite_id) REFERENCES specialite(id)
);

CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'user') DEFAULT 'user',
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL
);

CREATE TABLE ContactMessages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255),
    telephone VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    artisanId INT,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    FOREIGN KEY (artisanId) REFERENCES artisan(id) ON DELETE CASCADE
);
