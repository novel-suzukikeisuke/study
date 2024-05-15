-- DISTINCTを用いたデータ取得
SELECT DISTINCT(character_name) --重複したデータを省く
FROM purchases;
SELECT DISTINCT(name)
FROM purchases;

-- 四則演算を用いたデータ取得
SELECT name, price, price * 1.08
FROM purchases;

-- SUM関数を使ったデータ取得
SELECT SUM(price) --指定カラムの合計値を算出
FROM purchases;
SELECT SUM(price)
FROM purchases
WHERE character_name = "にんじゃわんこ"; --WHEREと併用可能

-- AVG関数を使ったデータ取得
SELECT AVG(price) --指定カラムの平均値を算出
FROM purchases;
SELECT AVG(price)
FROM purchases
WHERE character_name = "にんじゃわんこ"; --WHEREと併用可能

-- COUNT関数を使ったデータ取得
SELECT COUNT(name) --指定カラムのデータ数を算出※NULLは計算されない
FROM purchases;
SELECT COUNT(*) --NULLも含めた全てのレコード数を取得
FROM purchases;
SELECT COUNT(*)
FROM purchases
WHERE character_name = "にんじゃわんこ"; --WHEREと併用可能

-- MAX,MIN関数を使ったデータ取得
SELECT MAX(price) --最大のデータを取得
FROM purchases;
SELECT MIN(price) --最小のデータを取得
FROM purchases;
SELECT MAX(price)
FROM purchases
WHERE character_name = "にんじゃわんこ"; --WHEREと併用可能

-- GROUP BY関数を使ったデータ取得
SELECT SUM(price), purchased_at 
FROM purchases
GROUP BY purchased_at; --データをグループ化※GROUP BYを用いる場合、SELECTで使えるのは、GROUP BYに指定しているカラム名と集計関数のみ
SELECT COUNT(price), purchased_at
FROM purchases
GROUP BY purchased_at;

-- GROUP BY関数を使ったデータ取得(複数)
SELECT SUM(price), purchased_at, character_name
FROM purchases
GROUP BY purchased_at, character_name;
SELECT COUNT(*), purchased_at, character_name
FROM purchases
GROUP BY purchased_at, character_name;

-- GROUP BY関数を使ったデータ取得(WHERE)
SELECT SUM(price), purchased_at
FROM purchases
WHERE character_name = "にんじゃわんこ"
GROUP BY purchased_at;
SELECT SUM(price), purchased_at, character_name
FROM purchases
WHERE category = "食費"
GROUP BY purchased_at, character_name;

-- HAVING関数を使ったデータ取得
SELECT SUM(price), purchased_at
FROM purchases
GROUP BY purchased_at
HAVING SUM(price) > 2000; --条件を満たすグループ化されたデータを取得する
SELECT SUM(price), purchased_at, character_name
FROM purchases
GROUP BY purchased_at, character_name
HAVING SUM(price) > 3000;