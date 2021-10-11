SQL Basic certification test

```
SELECT s.roll_number, s.name FROM student_information s
JOIN examination_marks e
USING (roll_number)
WHERE (e.subject_one + e.subject_two + e.subject_three) < 100;
```

```
SELECT c.customer_id, c.name, CONCAT("+", cc.country_code, c.phone_number) FROM customer c
JOIN country_code cc
USING (country)
ORDER BY c.customer_id;
```
