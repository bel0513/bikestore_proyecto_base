CREATE DATABASE IF NOT EXISTS laboratorio_crud
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;
USE laboratorio_crud;

DROP TABLE IF EXISTS equipos;
DROP TABLE IF EXISTS usuarios;

CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    rol ENUM('admin', 'cliente') NOT NULL DEFAULT 'cliente',
    creatad_at TIMESTAMP DEFAULT CURRENT_TIMESTAMO
);

CREATE TABLE equipos (
    id_equipos INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    marca VARCHAR(100),
    modelo VARCHAR(100),
    imagen VARCHAR(255) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO equipos (nombre, marca, modelo) VALUES
('Laptop', 'dell', 'XPS 13'),
('Smartphone', 'Apple', 'Iphone 13'),
('tablet', 'Samsung', 'Galaxy Tab S7'),
('Monitor', 'LG', 'Ultragear 27GN950'),
('Impresora', 'HP', 'LaserJet Pro M404dn')