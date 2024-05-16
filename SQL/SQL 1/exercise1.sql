-- SELECTを用いたデータ取得
SELECT name --カラム名
FROM purchases; --テーブル名
-- 複数のデータ取得
SELECT name, price  --”,”で区切る
FROM purchases;
-- WHEREを用いた特定のデータ取得
SELECT *
FROM purchases
WHERE category = "食費"; --カラムが〇〇であるレコードを取得
SELECT *
FROM purchases
WHERE price = 1000;
-- 比較演算子を用いたデータ取得
SELECT *
FROM purchases
WHERE price >= 1000;
-- LIKE演算子を用いたデータ取得（〇〇を含むレコードを取得）
SELECT *
FROM purchases
WHERE name LIKE "%プリン%"; --前後の%により〇〇を含むデータを取得できる
SELECT *
FROM purchases
WHERE name LIKE "プリン%"; --前方一致
-- NOT演算子を用いたデータ取得
SELECT *
FROM purchases
WHERE NOT character_name = "にんじゃわんこ"; --条件を満たさないデータを取得
-- NULLであるデータ取得
SELECT *
FROM purchases
WHERE price IS NULL; --"="で繋いではいけない
-- AND演算子を用いたデータ取得
SELECT *
FROM purchases
WHERE category = "食費"
AND character_name = "ひつじ仙人"; --条件1と条件2を共に満たすデータ
-- ORDER BYを用いたデータ取得
SELECT *
FROM purchases
ORDER BY price DESC; --降順に並び替えたデータを取得
-- LIMITを用いたデータ取得
SELECT *
FROM purchases
LIMIT 5; --最大で取得する件数