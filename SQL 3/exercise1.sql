-- 練習問題
SELECT name AS "選手名", height AS "身長"
FROM players
WHERE height > (
    SELECT AVG(height)
    FROM players
);

SELECT *
FROM players
JOIN countries
ON players.country_id = countries.id
WHERE countries.name = "日本"
AND height >= 180;

SELECT countries.name AS "国名", AVG(goals) AS "平均得点"
FROM players
JOIN countries
ON players.country_id = countries.id
GROUP BY countries.name;