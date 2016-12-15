use TruckCare;

CREATE USER 'trucks'@'localhost' IDENTIFIED BY 'FireDepartment2400';

GRANT ALL PRIVILEGES ON TruckCare.* TO 'trucks'@'localhost';