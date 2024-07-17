CREATE database triparis;
use triparis;


CREATE TABLE Place(
   Place_id int auto_increment primary key,
   Name_place VARCHAR(50),
   Address VARCHAR(50),
   City VARCHAR(50),
   Transport VARCHAR(50),
   Outside boolean,
   Image VARCHAR(500)
);

CREATE TABLE Today(
   Day_id int auto_increment primary key,
   Time_visit INT,
   Today_date DATE,
   Weather VARCHAR(50)
);

CREATE TABLE users ( 
    user_id int auto_increment primary key,
    user_created datetime,
    user_name varchar(100) unique,
    user_email varchar(100) unique,
    user_role varchar(100),
    user_pass varchar(100)
);

CREATE TABLE Excursion(
   Excursion_id int auto_increment primary key,
   Name VARCHAR(50),
   Type VARCHAR(50),
   Duration_time INT,
   Place INT NOT NULL,
   Image VARCHAR(500) DEFAULT NULL,
   FOREIGN KEY(Place) REFERENCES Place(Place_id)
);

CREATE TABLE Plan(
   Excursion_id INT,
   Day_id INT,
   user_id INT,
   PRIMARY KEY(Excursion_id, Day_id, user_id),
   FOREIGN KEY(Excursion_id) REFERENCES Excursion(Excursion_id),
   FOREIGN KEY(Day_id) REFERENCES Today(Day_id),
   FOREIGN KEY(user_id) REFERENCES users(user_id)
);

CREATE TABLE Choice(
   Choice_id int auto_increment primary key,
   Excursion_id INT,
   FOREIGN KEY(Excursion_id) REFERENCES Excursion(Excursion_id)
);
