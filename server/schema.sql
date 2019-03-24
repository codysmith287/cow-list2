CREATE DATABASE IF NOT EXISTS cows;

USE cows;

/* Describe your table here.*/

CREATE TABLE IF NOT EXISTS cow_list (
  /* Describe your table here.*/
  id int NOT NULL AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  description varchar(200)  NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/