#!/bin/bash

mysql -u root < ./DropTables.sql
mysql -u root < ./CreateTables.sql
mysql -u root < ./CreateViews.sql
mysql -u root < ./DataInsert.sql