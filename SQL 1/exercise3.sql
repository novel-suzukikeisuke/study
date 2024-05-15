-- 練習問題
SELECT *
FROM purchases
WHERE purchased_at <= "2017-08-01";

SELECT *
FROM purchases
WHERE name LIKE "%プリン%";

SELECT *
FROM purchases
WHERE NOT character_name = "にんじゃわんこ";

SELECT *
FROM purchases
WHERE price IS NULL;

SELECT *
FROM purchases
WHERE category = "食費"
AND character_name = "ひつじ仙人";

SELECT *
FROM purchases
ORDER BY price DESC
LIMIT 5;