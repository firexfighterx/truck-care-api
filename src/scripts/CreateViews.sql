CREATE VIEW `truckDetailItems` AS
select responsibility.responsibilityId, trucks.truckNumber, category.description as category, responsibility.description as responsibility
from responsibility
Join trucks 
on responsibility.truckId = trucks.id
join category 
on responsibility.categoryId = category.categoryId;

CREATE VIEW `activegroup` AS 
SELECT 
        g.groupName ,
        u.userId,
        u.firstName,
        u.lastName,
        u.isActive
    FROM
        team t
        JOIN user u ON u.userId = t.userId
        JOIN groups g ON g.groupId = t.groupId
    WHERE
        g.isActive = 1
