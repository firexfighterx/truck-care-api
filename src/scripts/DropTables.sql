use TruckCare;

delete from errorOutcomeDetail;
delete from outcomeUsers;
delete from outcome;
delete from responsibility;
delete from category;
delete from team;
delete from active_group;
delete from groups;
delete from active_user;
delete from user;
delete from trucks;

DROP TABLE IF EXISTS errorOutcomeDetail;
DROP TABLE IF EXISTS outcomeUsers;
DROP TABLE IF EXISTS outcome;
DROP TABLE IF EXISTS responsibility;
DROP TABLE IF EXISTS category;
DROP TABLE IF EXISTS team;
DROP TABLE IF EXISTS active_group;
DROP TABLE IF EXISTS groups;
DROP TABLE IF EXISTS active_user;
DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS trucks;

drop user IF EXISTS 'trucks'@'localhost';

drop database IF EXISTS TruckCare;