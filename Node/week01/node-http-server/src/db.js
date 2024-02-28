import { readFile, writeFile } from 'node:fs/promises';

const db = {};

// Read data from json file
const readDataFromFile = async (file) => {
  try {
    const data = await readFile(file, { encoding: 'utf8' });
    console.log('Read successfully');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading file:', error);
  }
};

db.users = await readDataFromFile('./data/users.json');
db.posts = await readDataFromFile('./data/posts.json');

// Write data into json file
const writeDataToFile = async (file, data) => {
  try {
    await writeFile(file, data);
    console.log('Write successfully');
  } catch (error) {
    console.error('Error writting file:', error);
  }
};

const updateEntityDb = async (entity) => {
  await writeDataToFile(`./data/${entity}.json`, JSON.stringify(db[entity]));
};

export { db, updateEntityDb };
