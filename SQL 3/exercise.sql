-- 復習問題
SELECT goals
FROM players
WHERE name = "ウィル";
SELECT *
FROM players
WHERE goals > 14;

-- サブクエリ("()"で囲まれた部分が先に実行される)
SELECT name
FROM players
WHERE goals > (
    SELECT goals
    FROM players
    WHERE name = "ウィル"
);
SELECT name, goals
FROM players 
WHERE goals > (
    SELECT AVG(goals)
    FROM players
);

-- AS
SELECT name AS "身長180cm以上の選手" --カラム名などに別名を定義できる
FROM players
WHERE height >= 180;
SELECT SUM(goals) AS "チームの合計得点"
FROM players;

-- 復習
SELECT *
FROM countries
WHERE rank < (
    SELECT rank
    FROM countries
    WHERE name = "日本"
);

-- テーブルを紐づける
SELECT SUM(goals), country_id
FROM players
GROUP BY country_id;

-- JOIN
SELECT *
FROM players
JOIN countries --複数のテーブル結合する（結合したテーブルは1つのテーブルとしてデータを取得できる）
ON players.country_id = countries.id; --テーブルA.外部キー = テーブルA.主キー

-- JOIN(2)
SELECT players.name, countries.name --同じカラム名の場合はテーブル名.カラム名で指定
FROM players
JOIN countries
ON players.country_id = countries.id;
SELECT countries.name, SUM(goals)
FROM players
JOIN countries
ON players.country_id = countries.id
GROUP BY countries.name;

-- JOIN(3)
SELECT *
FROM players
JOIN teams --外部キーがNULLのレコードは実行結果に反映されない
ON players.previous_team_id = teams.id;
SELECT players.name AS "選手名", teams.name AS "前年所属していたチーム"
FROM players
JOIN teams
ON players.previous_team_id = teams.id;

-- JOIN(4)
SELECT *
FROM players
LEFT JOIN teams --外部キーがNULLのレコードも反映される
ON players.previous_team_id = teams.id;
SELECT players.name AS "選手名", teams.name AS "前年所属していたチーム"
FROM players
LEFT JOIN teams
ON players.previous_team_id = teams.id;

-- JOIN(5)
SELECT *
FROM players --JOINを複数使っても、FROMは1度だけでいい
JOIN countries
ON players.country_id = countries.id
LEFT JOIN teams
ON players.previous_team_id = teams.id;