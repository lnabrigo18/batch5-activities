CREATE TABLE students
(
"id" int,
"first_name" varchar(255),
"middle_name" varchar(255),
"last_name" varchar(255),
"age" int,
"location" varchar(255)
);

INSERT INTO students
("id","first_name","middle_name","last_name","age","location");

VALUES 
(1, "Juan", "A", "Cruz", 18, "Manila"),
(2, "John", "A", "Young", 20, "Manila"),
(3, "Victor", "A", "Rivera", 21, "Manila"),
(4, "Adrian, "A", "Co", 19, "Laguna"),
(5, "Pau", "A", "Riosa", 22, "Marikina"),
(6, "Piolo", "A", "Pascual", 25, "Manila");
Update students
SET first_name = "Ana", middle_name ="Cui", last_name = "Cajocson", age = 25, location "Bulacan"
WHERE id = 1;
DELETE FROM students
WHERE id = 6;

