--練習問題
SELECT SUM(price), category
FROM purchases
GROUP BY category;

SELECT SUM(price), character_name
FROM purchases
WHERE category = "雑費"
GROUP BY character_name;