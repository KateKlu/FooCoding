// const fs = require('fs');
const prompt = require('prompt-sync')({ sigint: true });
const mysql = require('mysql2/promise');

async function connectDB() {
   const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'Sql-48504191',
      database: 'new_world',
   });
   return connection;
}

// What is the capital of country X ? (Accept X from user)
async function getCapitalOfCountry(connection, country) {
   const query =
      'SELECT city.Name FROM city INNER JOIN country ON city.ID = country.Capital WHERE country.Name = ?';
   const [rows] = await connection.execute(query, [country]);
   return rows.length ? rows[0].Name : 'Capital not found';
}

// List all the languages spoken in the region Y (Accept Y from user)
async function getLanguagesOfRegion(connection, region) {
   const query =
      'SELECT DISTINCT countrylanguage.Language FROM countrylanguage INNER JOIN country ON country.Code = countrylanguage.CountryCode WHERE country.Region = ?';
   const [rows] = await connection.execute(query, [region]);
   return rows.length
      ? rows.map((row) => row.Language)
      : ['Languages not found'];
}

// Find the number of cities in which language Z is spoken (Accept Z from user)
async function getCitiesCountForLanguage(connection, language) {
   const query =
      'SELECT COUNT(city.ID) as count FROM city INNER JOIN countrylanguage ON city.CountryCode = countrylanguage.CountryCode WHERE countrylanguage.Language = ?';
   const [rows] = await connection.execute(query, [language]);
   return rows.length ? rows[0].count : 0;
}

// For the country given as input, is there any countries that
// -have the same official language
// -is in the same continent
async function getCountriesWithSameLanguageAndContinent(connection, country) {
   const query = `
        SELECT c2.Name
        FROM country c2
        INNER JOIN (
            SELECT c.Code, c.Continent, cl.Language
            FROM country c
            INNER JOIN countrylanguage cl 
                ON cl.CountryCode = c.Code
            WHERE c.Name = ? AND cl.IsOfficial = 'T'
        ) subquery
        ON c2.Continent = subquery.Continent
        INNER JOIN countrylanguage cl2 
            ON cl2.CountryCode = c2.Code AND cl2.Language = subquery.Language
        WHERE c2.Code != subquery.Code AND cl2.IsOfficial = 'T'
    `;

   const [rows] = await connection.execute(query, [country]);
   return rows.length ? rows.map((row) => row.Name) : ['FALSE'];
}

(async () => {
   const connection = await connectDB();

   const country = prompt('Enter country name: ');
   const capital = await getCapitalOfCountry(connection, country);
   console.log(`Capital of ${country}: ${capital}`);

   const region = prompt('Enter region name: ');
   const languages = await getLanguagesOfRegion(connection, region);
   console.log(`Languages ​​spoken in ${region}: ${languages.join(', ')}`);

   const language = prompt('Enter language: ');
   const citiesCount = await getCitiesCountForLanguage(connection, language);
   console.log(`Number of cities where ${language} is spoken : ${citiesCount}`);

   const comparedCountry = prompt('Enter compared country name: ');
   const sameLanguageAndContinentCountries =
      await getCountriesWithSameLanguageAndContinent(
         connection,
         comparedCountry
      );
   console.log(
      `Countries on the same continent with the same official language as ${comparedCountry}: ${sameLanguageAndContinentCountries.join(
         ', '
      )}`
   );

   await connection.end();
})();
