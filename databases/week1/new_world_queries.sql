SELECT Name FROM country WHERE Population > 8000000;

SELECT Name FROM country WHERE Name LIKE '%land%';

SELECT Name FROM city WHERE Population BETWEEN 500000 AND 1000000;

SELECT city.Name
FROM city
INNER JOIN country ON city.ID = country.Capital
WHERE country.Continent = 'Europe';

SELECT country.Name
FROM country
JOIN city ON country.Code = city.CountryCode
GROUP BY country.Name
HAVING COUNT(city.ID) > 10 AND SUM(city.Population) > 50000000;

SELECT city.Name
FROM city
JOIN country ON city.CountryCode = country.Code
WHERE country.Name IN (
    SELECT country.Name
	FROM country
	JOIN city ON country.Code = city.CountryCode
	GROUP BY country.Name
	HAVING COUNT(city.ID) > 10 AND SUM(city.Population) > 50000000
) AND city.Population > 5000000;

SELECT country.Continent, country.Name, city.Name as Capital
FROM country
JOIN city ON country.Capital = city.ID
WHERE (country.Population / country.SurfaceArea) > 1000;

SELECT country.Name, country.Continent
FROM country 
JOIN (
    SELECT Continent, MAX(SurfaceArea) AS MaxSurfaceArea
    FROM country
    WHERE Continent != 'Antarctica'
    GROUP BY Continent
) query ON country.Continent = query.Continent AND country.SurfaceArea = query.MaxSurfaceArea;