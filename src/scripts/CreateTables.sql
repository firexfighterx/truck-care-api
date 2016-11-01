CREATE DATABASE TruckCare;
 
USE TruckCare;
 
CREATE TABLE trucks (
id INT AUTO_INCREMENT PRIMARY KEY,
truckNumber VARCHAR(30) NOT NULL
);
 
CREATE TABLE user(
userId INT AUTO_INCREMENT PRIMARY KEY,
firstName VARCHAR(40) NOT NULL,
lastName VARCHAR(50) NOT NULL,
isActive TINYINT(1) NOT NULL DEFAULT 0
);

CREATE TABLE groups(
groupId INT AUTO_INCREMENT PRIMARY KEY,
groupName VARCHAR(50) NOT NULL,
isActive TINYINT(1) NOT NULL DEFAULT 0
);

CREATE TABLE team(
id INT AUTO_INCREMENT PRIMARY KEY,
userId INT NOT NULL,
groupId INT NOT NULL,
FOREIGN KEY (userId) REFERENCES user(userId),
FOREIGN KEY (groupId) REFERENCES groups(groupId)
);

CREATE TABLE category(
categoryId INT AUTO_INCREMENT PRIMARY KEY,
description VARCHAR(400) NOT NULL
);

CREATE TABLE responsibility(
responsibilityId INT AUTO_INCREMENT PRIMARY KEY,
truckId INT NOT NULL,
categoryId INT NOT NULL,
description VARCHAR(4000) NOT NULL,
FOREIGN KEY (truckId) REFERENCES trucks(Id),
FOREIGN KEY (categoryId) REFERENCES category(categoryId)
);

CREATE TABLE outcome(
outcomeId INT AUTO_INCREMENT PRIMARY KEY,
wasOutcomeGood TINYINT(1) NOT NULL,
datePerformed DATETIME NOT NULL,
responsibilityId INT NOT NULL,
FOREIGN KEY (responsibilityId) REFERENCES responsibility(responsibilityId)
);

CREATE TABLE outcomeUsers(
outcomeUserId INT AUTO_INCREMENT PRIMARY KEY,
outcomeId INT,
userId INT,
FOREIGN KEY (outcomeId) REFERENCES outcome(outcomeId),
FOREIGN KEY (userId) REFERENCES user(userId)
);

CREATE TABLE errorOutcomeDetail(
errorOutcomeId INT AUTO_INCREMENT PRIMARY KEY,
outcomeId INT NOT NULL,
detail VARCHAR(2000) NOT NULL,
FOREIGN KEY (outcomeId) REFERENCES outcome(outcomeId)
);