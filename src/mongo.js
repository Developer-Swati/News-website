const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'sample';

MongoClient.connect(url, (err, client) => {
  if (err) {
    console.log('Error while connecting to the database:', err);
    return;
  }

  console.log('Successfully connected to the database');

  const db = client.db(dbName);

  // Perform your database operations here

  client.close();
});
