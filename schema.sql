DROP DATABASE IF EXISTS grocerylist;
CREATE DATABASE grocerylist;
USE grocerylist;

-- DROP TABLE IF EXISTS stores;
CREATE TABLE stores (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  PRIMARY KEY (id)
);

-- DROP TABLE IF EXISTS items;
CREATE TABLE items (
  id int NOT NULL AUTO_INCREMENT,
  item varchar(100) NOT NULL,
  checked BOOLEAN NOT NULL DEFAULT 0,
  storeId int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (storeId) REFERENCES stores (id)
);
