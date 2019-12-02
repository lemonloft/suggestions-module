DROP DATABASE IF EXISTS lemonloft;

CREATE DATABASE lemonloft;

USE lemonloft;

CREATE TABLE activity (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(50),
  image_url VARCHAR(300),
  cost INT,
  rating DECIMAL,
  num_comments INT,
  location_id INT,
  FOREIGN KEY (location_id) REFERENCES location (id)
)

CREATE TABLE location (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  location VARCHAR(50)
)

CREATE TABLE image (
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
  FOREIGN KEY (image_id) REFERENCES image (id),
  FOREIGN KEY (location_id) REFERENCES location (id)
)