use TruckCare;

CREATE VIEW `truckDetailItems` AS
select 	responsibility.responsibilityId, 
		trucks.truckNumber, 
        category.description as category, 
        responsibility.description as responsibility
	from responsibility
	Join trucks on responsibility.truckId = trucks.id
    join category on responsibility.categoryId = category.categoryId;

CREATE VIEW `activegroup` AS 
SELECT 
        g.groupName ,
        u.userId,
        u.firstName,
        u.lastName,
        IF(au.userId IS NULL, FALSE, TRUE) as isActive
    FROM
        team t
        JOIN user u ON u.userId = t.userId
        JOIN groups g ON g.groupId = t.groupId
        LEFT JOIN active_user au ON au.userId = t.userId
    WHERE
        g.groupId = (SELECT groupId FROM active_group LIMIT 1);        

CREATE VIEW `outcomes` AS
SELECT 	o.outcomeId,
		t.truckNumber,
		r.responsibilityId, 
        o.wasOutcomeGood, 
        r.description, 
        od.detail, 
        o.datePerformed, 
        concat(u.firstName, ' ', u.lastName) AS name
	FROM outcome o
	RIGHT JOIN outcomeUsers ou ON o.outcomeId = ou.outcomeId
    INNER JOIN trucks t on o.truckId = t.id
	INNER JOIN user u ON ou.userId = u.userId
	INNER JOIN responsibility r ON o.responsibilityId = r.responsibilityId
	LEFT JOIN errorOutcomeDetail od ON o.outcomeId = od.outcomeId
	ORDER BY o.outcomeId 