### Basic Select
```
// Revising the Select Query I
SELECT * FROM CITY WHERE POPULATION > 100000 AND COUNTRYCODE = 'USA';

// Revising the Select Query II
SELECT NAME FROM CITY WHERE POPULATION > 120000 AND COUNTRYCODE = 'USA';

// Select ALL
SELECT * FROM CITY;

// Select by ID
SELECT * FROM CITY WHERE ID = 1661;

// Japanese Cities Atrributes
SELECT * FROM CITY WHERE COUNTRYCODE = 'JPN';

// Japanese Cities Names
SELECT NAME FROM CITY WHERE COUNTRYCODE = 'JPN';

// Weather Observation Station 1
SELECT CITY, STATE FROM STATION;

// Weather Observation Station 3
SELECT DISTINCT CITY FROM STATION WHERE ID % 2 = 0;

// Weather Observation Station 4
SELECT (COUNT(CITY) - COUNT(DISTINCT CITY)) FROM STATION;

// Weather Observation Station 5
SELECT CITY, LENGTH(CITY) as CITY_LEN FROM STATION ORDER BY CITY_LEN ASC, CITY LIMIT 1;
SELECT CITY, LENGTH(CITY) as CITY_LEN FROM STATION ORDER BY CITY_LEN DESC, CITY LIMIT 1;

// Weather Observation Station 6
SELECT DISTINCT CITY FROM STATION WHERE CITY REGEXP '^[aeiou]';
SELECT CITY FROM STATION WHERE CITY LIKE "a%" OR CITY LIKE "e%" OR CITY LIKE "i%" OR CITY LIKE "o%" OR CITY LIKE "u%";
SELECT CITY FROM STATION WHERE LEFT(CITY, 1) IN ('a', 'e', 'i', 'o', 'u');

// Weather Observation Station 7
SELECT DISTINCT CITY FROM STATION WHERE CITY REGEXP '[aeiou]$';
SELECT DISTINCT CITY FROM STATION WHERE CITY LIKE "%a" OR CITY LIKE "%e" OR CITY LIKE "%i" OR CITY LIKE "%o" OR CITY LIKE "%u";
SELECT DISTINCT CITY FROM STATION WHERE RIGHT(CITY, 1) IN ('a','e','i','o','u');

// Weather Observation Station 8
SELECT DISTINCT CITY FROM STATION WHERE CITY REGEXP '^[aeiou]' AND CITY REGEXP '[aeiou]$';
SELECT DISTINCT CITY FROM STATION WHERE LEFT(CITY, 1) IN ('a','e','i','o','u') AND RIGHT(CITY, 1) IN ('a','e','i','o','u');

// Weather Observation Station 9
SELECT DISTINCT CITY FROM STATION WHERE LEFT(CITY,1) NOT IN ('a','e','i','o','u');

// Weather Observation Station 10
SELECT DISTINCT CITY FROM STATION WHERE RIGHT(CITY,1) NOT IN ('a','e','i','o','u');

// Weather Observation Station 11
SELECT DISTINCT CITY FROM STATION WHERE LEFT(CITY,1) NOT IN ('a','e','i','o','u') OR RIGHT(CITY,1) NOT IN ('a','e','i','o','u');
SELECT DISTINCT CITY FROM STATION WHERE CITY NOT REGEXP '^[aeiou]' OR CITY NOT REGEXP '[aeiou]$';

// Weather Observation Station 12
SELECT DISTINCT CITY FROM STATION WHERE LEFT(CITY,1) NOT IN ('a','e','i','o','u') AND RIGHT(CITY,1) NOT IN ('a','e','i','o','u');
SELECT DISTINCT CITY FROM STATION WHERE CITY NOT REGEXP '^[aeiou]' AND CITY NOT REGEXP '[aeiou]$';

// Higher Than 75 Marks
SELECT Name FROM STUDENTS WHERE Marks > 75 ORDER BY RIGHT(Name, 3), ID;

// Employee Names
SELECT name FROM Employee ORDER BY name;

// Employee Salaries
SELECT name FROM Employee WHERE salary > 2000 AND months < 10 ORDER BY employee_id;
```

### Advanced Select

```
// Type of Triangle
SELECT CASE             
            WHEN A + B > C AND B + C > A AND A + C > B THEN
                CASE 
                    WHEN A = B AND B = C THEN 'Equilateral'
                    WHEN A = B OR B = C OR A = C THEN 'Isosceles'
                    ELSE 'Scalene'
                END
            ELSE 'Not A Triangle'
        END
FROM TRIANGLES;


// The PADS
SELECT CONCAT(m.Name, "(", m.Title ,")") FROM (
    SELECT OCCUPATIONS.*, UPPER(LEFT(Occupation, 1)) AS Title FROM OCCUPATIONS
) AS m ORDER BY m.Name;
(or)
SELECT CONCAT( Name , "(" , SUBSTR(Occupation, 1, 1) , ")" ) As Title FROM OCCUPATIONS ORDER BY Title;

SELECT CONCAT("There are a total of ", COUNT(Occupation), " ", Lower(Occupation), "s.") FROM OCCUPATIONS GROUP BY Occupation ORDER BY COUNT(Occupation), Occupation;
```

### Aggregation
```
// Revising Aggregations - The Count Function
SELECT COUNT(ID) FROM CITY WHERE POPULATION > 100000;

// Revising Aggregations - The Sum Function
SELECT SUM(POPULATION) FROM CITY WHERE DISTRICT = 'California';

// Revising Aggregations - Averages
SELECT AVG(POPULATION) FROM CITY WHERE DISTRICT = 'California';

// Weather Observation Station 2
SELECT ROUND(SUM(LAT_N), 2), ROUND(SUM(LONG_W), 2) FROM STATION;

// Weather Observation Station 13
SELECT ROUND(SUM(LAT_N), 4) FROM STATION WHERE LAT_N > 38.7880 AND LAT_N < 137.2345;
SELECT ROUND(SUM(LAT_N), 4) FROM STATION WHERE LAT_N BETWEEN 38.7880 AND 137.2345;

// Weather Observation Station 14
SELECT ROUND(MAX(LAT_N), 4) FROM STATION WHERE LAT_N < 137.2345;

// Weather Observation Station 15
SELECT ROUND(LONG_W, 4) FROM STATION WHERE LAT_N = (
    SELECT MAX(LAT_N) FROM STATION WHERE LAT_N < 137.2345
);

// Weather Observation Station 16
SELECT ROUND(MIN(LAT_N), 4) FROM STATION WHERE LAT_N > 38.7880;

// Weather Observation Station 17
SELECT ROUND(LONG_W,4) FROM STATION WHERE LAT_N = (
    SELECT MIN(LAT_N) FROM STATION WHERE LAT_N > 38.7780
);

// Weather Observation Station 18
SELECT ROUND((MAX(LAT_N) - MIN(LAT_N)) + (MAX(LONG_W) - MIN(LONG_W)), 4) FROM STATION;


// Average Population
SELECT FLOOR(AVG(POPULATION)) FROM CITY;

// Japan Population
SELECT SUM(POPULATION) FROM CITY WHERE COUNTRYCODE = 'JPN';

// Population Density Difference
SELECT (MAX(POPULATION) - MIN(POPULATION)) FROM CITY;

// The Blunder
SELECT CEIL(AVG(Salary) - AVG(REPLACE(Salary, 0, ""))) FROM EMPLOYEES;

// Top Earners
SELECT MAX(months * salary), COUNT(*) FROM Employee WHERE months * salary = (
    SELECT MAX(months * salary) FROM Employee
);

```