#!/bin/bash

mysql -u root < ~/code/home/truck-care-api/src/scripts/DropTables.sql
mysql -u root < ~/code/home/truck-care-api/src/scripts/CreateTables.sql
mysql -u root < ~/code/home/truck-care-api/src/scripts/CreateViews.sql
mysql -u root < ~/code/home/truck-care-api/src/scripts/DataInsert.sql