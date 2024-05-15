-- 練習問題
SELECT AVG(age)
FROM users;

SELECT *
FROM users
WHERE gender = 0
AND age < 20;

SELECT age, COUNT(*)
FROM users
GROUP BY age; 

-- 練習問題1
SELECT DISTINCT(name)
FROM items;

SELECT name, price
FROM items
ORDER BY price DESC;

SELECT *
FROM items
WHERE name LIKE "%シャツ%";

-- 練習問題3
SELECT name, price, price - cost
FROM items;

SELECT AVG(price - cost)
FROM items;

SELECT DISTINCT(name), price - cost
FROM items
ORDER BY price - cost DESC
LIMIT 5;

-- 練習問題4
SELECT name, price
FROM items
WHERE price > (
    SELECT price
    FROM items
    WHERE name = "グレーパーカー"
);

SELECT name, price - cost
FROM items
WHERE price <= 7000
AND price - cost > (
    SELECT price - cost
    FROM items
    WHERE name = "グレーパーカー"
);

-- 練習問題5
SELECT item_id, COUNT(*)
FROM sales_records
GROUP BY item_id;

SELECT item_id, COUNT(*)
FROM sales_records
GROUP BY item_id
ORDER BY COUNT(*) DESC
LIMIT 5;

-- 練習問題6
SELECT item_id, name, COUNT(*)
FROM sales_records
JOIN items
ON sales_records.item_id = items.id
GROUP BY item_id, name
ORDER BY COUNT(*) DESC
LIMIT 5;

SELECT SUM(price) AS "総売上", SUM(price - cost) AS "総利益"
FROM sales_records
JOIN items
ON sales_records.item_id = items.id;

-- 練習問題7
SELECT purchased_at, COUNT(item_id) AS "販売個数"
FROM sales_records
GROUP BY purchased_at
ORDER BY purchased_at ASC;

SELECT purchased_at, SUM(price) AS "売上額"
FROM sales_records
JOIN items
ON sales_records.item_id = items.id
GROUP BY purchased_at
ORDER BY purchased_at ASC;

-- 練習問題8
SELECT user_id, name, COUNT(*) AS "購入数"
FROM sales_records
JOIN users
ON sales_records.user_id = users.id
GROUP BY user_id, name
HAVING COUNT(*) >= 10;

SELECT users.id, users.name
FROM sales_records
JOIN users
ON sales_records.user_id = users.id
WHERE sales_records.item_id = (
    SELECT id
    FROM items
    WHERE name = "サンダル"
)
GROUP BY users.id, users.name;