-- 練習問題
INSERT INTO students (name, course)
VALUES ("Katy", "HTML");

UPDATE students
SET name = "Juliet", course = "Ruby"
WHERE id = 6;

DELETE FROM students
WHERE id = 2;