DROP DATABASE IF EXISTS lemonloft;

CREATE DATABASE lemonloft;

USE lemonloft;

-- CREATE TABLE `locations` (
--   `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   `location` VARCHAR(100)
-- );

-- CREATE TABLE `images` (
--   `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   `url` VARCHAR(300)
-- );

CREATE TABLE `activities` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(300),
  `image_url` VARCHAR(300),
  `cost` INT,
  `rating` FLOAT,
  `num_comments` INT,
  `location` VARCHAR(500)
  -- `location_id` INT,
  -- CONSTRAINT `fk_activities_location_id`
  -- FOREIGN KEY (location_id) REFERENCES locations (id) ON DELETE CASCADE
);

CREATE TABLE `listings` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` VARCHAR(300),
  `main_image_url` VARCHAR(300),
  -- `image` INT,
  `cost` INT,
  `rating` FLOAT,
  `num_comments` INT,
  -- `location_id` INT,
  `location` VARCHAR(500),
  `room_type` VARCHAR(100),
  -- FOREIGN KEY (image) REFERENCES images (id),
  -- CONSTRAINT `fk_listings_location_id`
  -- FOREIGN KEY (location_id) REFERENCES locations (id) ON DELETE CASCADE
);