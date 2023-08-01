=>nodemon start
=>install npm i mysql2 
=>const mysql = require('mysql2')
cuz somehow mysql=require('mysql') is not working
=>follow this doc https://www.w3schools.com/nodejs/nodejs_mysql_insert.asp(how to make call to mysql)

### All the sql query will be found on https://sqlbolt.com/lesson/introduction
=>A primary key is used to ensure data in the specific column is unique. 
=>A foreign key is a column or group of columns in a relational database table that provides a link between data in two tables. It acts as a cross-reference between tables because it references the primary key of another table, thereby establishing a link between them.
# most used sql query
SELECT * FROM movies 
order by year desc
LIMIT 4 OFFSET 0     //offset is the starting point of the query and limit is the ending point of the query

SELECT column, another_column, …
FROM mytable
WHERE condition(s)
ORDER BY column ASC/DESC
LIMIT num_limit OFFSET num_offset;

## joining table

# The INNER JOIN keyword selects records that have matching values in both tables.
//inner join: movies table ar id=>prinmary key, boxoffice table ar movie_id=>foreign key
SELECT Domestic_sales,International_sales FROM movies(primary key table)
INNER JOIN Boxoffice(foreign key table) 
ON movies.id = Boxoffice.Movie_id

SELECT * FROM movies
INNER JOIN Boxoffice 
ON movies.id = Boxoffice.Movie_id
-----------inner join korey movie table new col niye prepared hoye gesey and  resulting movie table only contains data that belongs in both of the tables.------------
where International_sales > Domestic_sales

//multiple joing together
SELECT Orders.OrderID, Customers.CustomerName, Shippers.ShipperName
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID
INNER JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID;

//left/right/full join:
# The LEFT JOIN keyword returns all records from the left table (table1)/primarykey/left table, and the matching records from the right table (table2)/foreign key/right table. The result is 0 records from the right side, if there is no match.
# The FULL JOIN keyword returns all records when there is a match in left (table1) or right (table2) table records.
SELECT column, another_column, …
FROM mytable(left table)
LEFT/RIGHT/FULL JOIN another_table(right table) 
ON mytable.id = another_table.matching_id
WHERE condition(s)
ORDER BY column, … ASC/DESC
LIMIT num_limit OFFSET num_offset;

Q.Find the list of all buildings that have employees 
SELECT DISTINCT Building FROM Employees  
Left join Buildings   
on Employees .Building=Building.Building_name
Q.Find the list of all buildings and their capacity
SELECT DISTINCT Building_name,Capacity FROM Buildings   
Left join Employees    
on Buildings.Building_name=Employees.Building

##  A short note on NULLs
SELECT column, another_column, …
FROM mytable
WHERE column IS/IS NOT NULL
AND/OR another_condition
AND/OR …;

Q.Find the name and role of all employees who have not been assigned to a building 
SELECT * from Employees 
left join Buildings 
on Employees.Building=Buildings.Building_name
where Building is null

## Queries with expressions
SELECT column AS better_column_name, …
FROM a_long_widgets_table_name AS mywidgets
INNER JOIN widget_sales
  ON mywidgets.id = widget_sales.widget_id;

Q.List all movies and their combined sales in millions of dollars 
SELECT title, (domestic_sales + international_sales) / 1000000 AS gross_sales_millions
FROM movies
  JOIN boxoffice
    ON movies.id = boxoffice.movie_id;

## SQL Lesson 10: Queries with aggregates (Pt. 1)=>There are five aggregate functions, which are: MIN, MAX, COUNT, SUM, and AVG.

# Grouped aggregate functions Group By  =>The GROUP BY statement is used with the aggregate functions to group the results by one or more columns.
# The GROUP BY statement groups rows that have the same values into summary rows, like "find the number of customers in each country". The GROUP BY statement is often used with aggregate functions (COUNT(), MAX(), MIN(), SUM(), AVG()) to group the result-set by one or more columns.

SELECT AGG_FUNC(column_or_expression) AS aggregate_description, …
FROM mytable
WHERE constraint_expression
GROUP BY column;
ORDER BY column_name(s);

# The HAVING clause was added to SQL because the WHERE keyword cannot be used with aggregate functions.are applied to the grouped rows. so having is used after the group by clause
SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
HAVING condition
ORDER BY column_name(s);

Q.Find the longest time that an employee has been at the studio 
SELECT *, MAX(Years_employed) FROM employees

Q.For each role, find the average number of years employed by employees in that role 
SELECT *, AVG(Years_employed) as avgYear FROM employees
Group by Role

Q.Find the total number of employee years worked in each building
SELECT *, TOTAL(Years_employed) as avgYear FROM employees
Group by Building

Q.Find the number of Artists in the studio (without a HAVING clause) 
SELECT *,COUNT(Role) FROM employees
where Role="Artist"
Group by Role

Q.Find the total number of years employed by all Engineers 
SELECT role, SUM(years_employed)
FROM employees
GROUP BY role
HAVING role = "Engineer";

## Nice to Remember the execution of sql follows the below rule
SELECT DISTINCT column, AGG_FUNC(column_or_expression), …
FROM mytable
    JOIN another_table
      ON mytable.column = another_table.column
    WHERE constraint_expression
    GROUP BY column
    HAVING constraint_expression
    ORDER BY column ASC/DESC
    LIMIT count OFFSET COUNT;


### SQL Topic: Subqueries    

