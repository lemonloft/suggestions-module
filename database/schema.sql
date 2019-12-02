DROP DATABASE IF EXISTS lemonloft;

CREATE DATABASE lemonloft;

USE lemonloft;

CREATE TABLE activities (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(50),
  image_url VARCHAR(300),
  cost INT,
  rating DECIMAL,
  num_comments INT,
  location_id INT,
  FOREIGN KEY (location_id) REFERENCES locations (id)
)

CREATE TABLE locations (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  location VARCHAR(50)
)

CREATE TABLE images (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  url VARCHAR(300)
)

CREATE TABLE homes (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(50),
  image_url VARCHAR(300),
  image_id INT,
  cost INT,
  rating DECIMAL,
  num_comments INT,
  location_id INT,
  room_type VARCHAR(50),
  FOREIGN KEY (image_id) REFERENCES images (id),
  FOREIGN KEY (location_id) REFERENCES locations (id)
)