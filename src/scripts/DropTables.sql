use TruckCare;

delete from errorOutcomeDetail;
delete from outcomeUsers;
delete from outcome;
delete from responsibility;
delete from category;
delete from team;
delete from groups;
delete from user;
delete from trucks;

drop table errorOutcomeDetail;
drop table outcomeUsers;
drop table outcome;
drop table responsibility;
drop table category;
drop table team;
drop table groups;
drop table user;
drop table trucks;

drop user 'trucks'@'localhost';

drop database TruckCare;