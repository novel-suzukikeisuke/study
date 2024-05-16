-- データを追加
INSERT INTO students (name, course) 
VALUES ("Kate", "Java");

-- データ更新
UPDATE students
SET name = "Jordan", course = "HTML" --指定カラムを新しい値に変更
WHERE id = 6; --更新するレコードをWHEREで指定

-- データ削除
DELETE FROM students
WHERE id = 7; --削除するレコードをWHEREで指定