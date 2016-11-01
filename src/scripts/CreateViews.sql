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
        u.isActive
    FROM
        team t
        JOIN user u ON u.userId = t.userId
        JOIN groups g ON g.groupId = t.groupId
    WHERE
        g.isActive = 1;

CREATE VIEW `outcomes` AS
SELECT 	o.outcomeId, 
		r.responsibilityId, 
        o.wasOutcomeGood, 
        r.description, 
        od.detail, 
        o.datePerformed, 
        concat(u.firstName, ' ', u.lastName) AS name
	FROM outcome o
	RIGHT JOIN outcomeUsers ou ON o.outcomeId = ou.outcomeId
	INNER JOIN user u ON ou.userId = u.userId
	INNER JOIN responsibility r ON o.responsibilityId = r.responsibilityId
	LEFT JOIN errorOutcomeDetail od ON o.outcomeId = od.outcomeId
	ORDER BY o.outcomeId