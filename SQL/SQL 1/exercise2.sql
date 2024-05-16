-- SELECTを用いたデータ取得
SELECT price
FROM purchases;
-- 全てのカラム取得
SELECT * --"*"全てのカラム指定
FROM purchases;

SELECT *
FROM purchases
WHERE purchased_at = "2017-07-01"; --日付型は""で囲む

SELECT *
FROM purchases
WHERE purchased_at <= "2017-08-01"; --指定したデータ以前のデータを取得

SELECT *
FROM purchases
WHERE name LIKE "%プリン"; --後方一致

SELECT *
FROM purchases
WHERE NOT name LIKE "%プリン%";

-- NULLでないデータ取得
SELECT *
FROM purchases
WHERE price IS NOT NULL;

-- OR演算子を用いたデータ取得
SELECT *
FROM purchases
WHERE category = "食費"
OR character_name = "にんじゃわんこ"; --条件1または条件2のどちらかを満たすデータ

SELECT *
FROM purchases
WHERE character_name = "にんじゃわんこ" --WHEREと併用可能
ORDER BY price ASC; --昇順に並び替えたデータを取得

SELECT *
FROM purchases
WHERE character_name = "にんじゃわんこ" --WHEREと併用可能
LIMIT 10;