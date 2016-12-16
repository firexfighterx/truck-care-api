use TruckCare;

insert into trucks set truckNumber = '2412';
insert into trucks set truckNumber = '2419';
insert into trucks set truckNumber = '2413';
insert into trucks set truckNumber = '2495';

insert into groups set groupName = 'Group 1', isActive = false;
insert into groups set groupName = 'Group 2', isActive = true;
insert into groups set groupName = 'Group 3', isActive = false;
insert into groups set groupName = 'Group 4', isActive = false;

insert into user set firstName = 'Doug', lastName = 'Gonzalez';
insert into user set firstName = 'Steve', lastName = 'Morales';
insert into user set firstName = 'Nick', lastName = 'Morales';
insert into user set firstName = 'Hector', lastName = 'Alcazar';
insert into user set firstName = 'Alec', lastName = 'Suarez';

insert into user set firstName = 'Joe', lastName = 'Krypciak';
insert into user set firstName = 'Mike', lastName = 'Krypciak';
insert into user set firstName = 'Ron', lastName = 'Pruitt';
insert into user set firstname = 'Manuel', lastName = 'Perez';
insert into user set firstName = 'Mike', lastName = 'Suarez';
insert into user set firstName = 'Oscar', lastName = 'Cortez';

insert into user set firstName = 'Brandon', lastName = 'Allen';
insert into user set firstName = 'Roger', lastName = 'Juenger';
insert into user set firstName = 'Eddie', lastName = 'Fiudo';
insert into user set firstName = 'Chris', lastName = 'Mammino';
insert into user set firstName = 'Jason', lastName = 'Foster';
insert into user set firstName = 'Scott', lastName = 'Rose';
insert into user set firstName = 'Rick', lastName = 'Ramirez';

insert into user set firstName = 'Dan', lastName = 'Rafalowski';
insert into user set firstName = 'Kevin', lastName = 'Duckworth';
insert into user set firstName = 'Rueban', lastName = 'Ochoa';
insert into user set firstName = 'Tristan', lastName = 'Ramirez';

insert into team set userId = 1, groupId = 1;
insert into team set userId = 2, groupId = 1;
insert into team set userId = 3, groupId = 1;
insert into team set userId = 4, groupId = 1;
insert into team set userId = 5, groupId = 1;

insert into team set userId = 6, groupId = 2;
insert into team set userId = 7, groupId = 2;
insert into team set userId = 8, groupId = 2;
insert into team set userId = 9, groupId = 2;
insert into team set userId = 10, groupId = 2;
insert into team set userId = 11, groupId = 2;

insert into team set userId = 12, groupId = 3;
insert into team set userId = 13, groupId = 3;
insert into team set userId = 14, groupid = 3;
insert into team set userId = 14, groupId = 3;
insert into team set userId = 15, groupId = 3;
insert into team set userId = 16, groupId = 3;
insert into team set userId = 17, groupId = 3;
insert into team set userId = 18, groupId = 3;

insert into team set userId = 19, groupId = 4;
insert into team set userId = 20, groupId = 4;
insert into team set userId = 21, groupId = 4;
insert into team set userId = 22, groupId = 4;

insert into category set description = 'Truck Essentials';
insert into category set description = 'Extrication';
insert into category set description = 'SCBA\'s';
insert into category set description = 'Lighting/Radios';
insert into category set description = 'Fans/Generators';


insert into responsibility set truckId = 1, categoryId = 1, description = 'Truck Inventory';
insert into responsibility set truckId = 1, categoryId = 1, description = 'Road Test';
insert into responsibility set truckId = 1, categoryId = 1, description = 'Washed';
insert into responsibility set truckId = 1, categoryId = 1, description = 'Clean Inside Cab (Include Windows)';
insert into responsibility set truckId = 1, categoryId = 1, description = 'Fuel';
insert into responsibility set truckId = 1, categoryId = 1, description = 'Oil Level';
insert into responsibility set truckId = 1, categoryId = 1, description = 'Radiator';
insert into responsibility set truckId = 1, categoryId = 1, description = 'Air Tanks (Bleed)';
insert into responsibility set truckId = 1, categoryId = 1, description = 'Tire Pressure';
insert into responsibility set truckId = 1, categoryId = 1, description = 'Primer Oil';
insert into responsibility set truckId = 1, categoryId = 1, description = 'Tank Water';

insert into responsibility set truckId = 1, categoryId = 2, description = 'Porta-Power';
insert into responsibility set truckId = 1, categoryId = 2, description = 'Spreaders (both sets)';
insert into responsibility set truckId = 1, categoryId = 2, description = 'Cutters (both sets)';
insert into responsibility set truckId = 1, categoryId = 2, description = 'Rams (both sets)';
insert into responsibility set truckId = 1, categoryId = 2, description = 'K-12 (start/fuel/oil)';
insert into responsibility set truckId = 1, categoryId = 2, description = 'Saw Tiger (Blades)';
insert into responsibility set truckId = 1, categoryId = 2, description = 'Chainsaw (start/fuel/oil)';

insert into responsibility set truckId = 1, categoryId = 3, description = 'SCBA\'s';
insert into responsibility set truckId = 1, categoryId = 3, description = 'Spare Bottles';

insert into responsibility set truckId = 1, categoryId = 4, description = 'Radios (Set to Fire Com 1, Check Volume)';
insert into responsibility set truckId = 1, categoryId = 4, description = 'Portables (Check Charge Level)';
insert into responsibility set truckId = 1, categoryId = 4, description = 'Vehicle Lights';
insert into responsibility set truckId = 1, categoryId = 4, description = 'Flood Lights (Mounted)';
insert into responsibility set truckId = 1, categoryId = 4, description = 'Flashlights';
insert into responsibility set truckId = 1, categoryId = 4, description = 'Thermal Camera (Battery Charge Level)';
insert into responsibility set truckId = 1, categoryId = 4, description = 'C/O Detector (Battery Charge Level)';
insert into responsibility set truckId = 1, categoryId = 4, description = 'Gas Detector (Battery Charge Level)';

insert into responsibility set truckId = 1, categoryId = 5, description = 'Fans (Start/Fuel/Oil)';
insert into responsibility set truckId = 1, categoryId = 5, description = 'Generator (Start/Fuel/Oil)';
insert into responsibility set truckId = 1, categoryId = 5, description = 'Gas Cans (Fill as needed)';



insert into responsibility set truckId = 2, categoryId = 1, description = 'Truck Inventory';
insert into responsibility set truckId = 2, categoryId = 1, description = 'Road Test';
insert into responsibility set truckId = 2, categoryId = 1, description = 'Washed';
insert into responsibility set truckId = 2, categoryId = 1, description = 'Clean Inside Cab (Include Windows)';
insert into responsibility set truckId = 2, categoryId = 1, description = 'Fuel';
insert into responsibility set truckId = 2, categoryId = 1, description = 'Oil Level';
insert into responsibility set truckId = 2, categoryId = 1, description = 'Radiator';
insert into responsibility set truckId = 2, categoryId = 1, description = 'Air Tanks (Bleed)';
insert into responsibility set truckId = 2, categoryId = 1, description = 'Tire Pressure';
insert into responsibility set truckId = 2, categoryId = 1, description = 'Primer Oil';
insert into responsibility set truckId = 2, categoryId = 1, description = 'Tank Water';

insert into responsibility set truckId = 2, categoryId = 2, description = 'Porta-Power';
insert into responsibility set truckId = 2, categoryId = 2, description = 'Spreaders (both sets)';
insert into responsibility set truckId = 2, categoryId = 2, description = 'Cutters (both sets)';
insert into responsibility set truckId = 2, categoryId = 2, description = 'Rams (both sets)';
insert into responsibility set truckId = 2, categoryId = 2, description = 'Chainsaw (start/fuel/oil)';

insert into responsibility set truckId = 2, categoryId = 3, description = 'SCBA\'s';
insert into responsibility set truckId = 2, categoryId = 3, description = 'Spare Bottles';

insert into responsibility set truckId = 2, categoryId = 4, description = 'Radios (Set to Fire Com 1, Check Volume)';
insert into responsibility set truckId = 2, categoryId = 4, description = 'Portables (Check Charge Level)';
insert into responsibility set truckId = 2, categoryId = 4, description = 'Vehicle Lights';
insert into responsibility set truckId = 2, categoryId = 4, description = 'Flood Lights (Mounted)';
insert into responsibility set truckId = 2, categoryId = 4, description = 'Flashlights';
insert into responsibility set truckId = 2, categoryId = 4, description = 'Thermal Camera (Battery Charge Level)';

insert into responsibility set truckId = 2, categoryId = 5, description = 'Fans (Start/Fuel/Oil)';
insert into responsibility set truckId = 2, categoryId = 5, description = 'Generator (Start/Fuel/Oil)';
insert into responsibility set truckId = 2, categoryId = 5, description = 'Gas Cans (Fill as needed)';



insert into responsibility set truckId = 3, categoryId = 1, description = 'Truck Inventory';
insert into responsibility set truckId = 3, categoryId = 1, description = 'Road Test';
insert into responsibility set truckId = 3, categoryId = 1, description = 'Washed';
insert into responsibility set truckId = 3, categoryId = 1, description = 'Clean Inside Cab (Include Windows)';
insert into responsibility set truckId = 3, categoryId = 1, description = 'Fuel';
insert into responsibility set truckId = 3, categoryId = 1, description = 'Oil Level';
insert into responsibility set truckId = 3, categoryId = 1, description = 'Radiator';
insert into responsibility set truckId = 3, categoryId = 1, description = 'Air Tanks (Bleed)';
insert into responsibility set truckId = 3, categoryId = 1, description = 'Tire Pressure';
insert into responsibility set truckId = 3, categoryId = 1, description = 'Primer Oil';
insert into responsibility set truckId = 3, categoryId = 1, description = 'Tank Water';

insert into responsibility set truckId = 3, categoryId = 2, description = 'Porta-Power';
insert into responsibility set truckId = 3, categoryId = 2, description = 'Chainsaw (start/fuel/oil)';

insert into responsibility set truckId = 3, categoryId = 3, description = 'SCBA\'s';
insert into responsibility set truckId = 3, categoryId = 3, description = 'Spare Bottles';

insert into responsibility set truckId = 3, categoryId = 4, description = 'Radios (Set to Fire Com 1, Check Volume)';
insert into responsibility set truckId = 3, categoryId = 4, description = 'Portables (Check Charge Level)';
insert into responsibility set truckId = 3, categoryId = 4, description = 'Vehicle Lights';
insert into responsibility set truckId = 3, categoryId = 4, description = 'Flood Lights (Mounted)';
insert into responsibility set truckId = 3, categoryId = 4, description = 'Flashlights';

insert into responsibility set truckId = 3, categoryId = 5, description = 'Fans (Start/Fuel/Oil)';
insert into responsibility set truckId = 3, categoryId = 5, description = 'Generator (Start/Fuel/Oil)';
insert into responsibility set truckId = 3, categoryId = 5, description = 'Gas Cans (Fill as needed)';


insert into outcome set wasOutcomeGood = 1, datePerformed = now(), responsibilityId = 1, truckId = 1;
insert into outcome set wasOutcomeGood = 0, datePerformed = now(), responsibilityId = 3, truckId = 2;
insert into outcomeUsers set outcomeId = 2, userId = 3;
insert into outcomeUsers set outcomeId = 1, userId = 1;
insert into outcomeUsers set outcomeId = 1, userId = 2;
insert into errorOutcomeDetail set outcomeId = 2, detail = 'Ahhhh I died';