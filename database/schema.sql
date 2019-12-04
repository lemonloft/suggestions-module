DROP DATABASE IF EXISTS lemonloft;

CREATE DATABASE lemonloft;

USE lemonloft;

-- CREATE TABLE `locations` (
--   `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   `location` VARCHAR(50)
-- );

-- CREATE TABLE `images` (
--   `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   `url` VARCHAR(300)
-- );

CREATE TABLE `activities` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(300),
  `imageUrl` VARCHAR(300),
  `cost` INT,
  `rating` FLOAT,
  `numComments` INT,
  `location` VARCHAR(100)
  -- FOREIGN KEY (location) REFERENCES locations (id)
);

CREATE TABLE `listings` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(300),
  `mainImageUrl` VARCHAR(300),
  -- `image` INT,
  `cost` INT,
  `rating` FLOAT,
  `numComments` INT,
  `location` VARCHAR(100),
  `roomType` VARCHAR(100)
  -- FOREIGN KEY (image) REFERENCES images (id),
  -- FOREIGN KEY (location) REFERENCES locations (id)
);