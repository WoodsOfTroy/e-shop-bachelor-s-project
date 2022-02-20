const { MongoClient } = require('mongodb');
const keys = require('../config/keys');

module.exports.main = async function main() {
  const uri = keys.mongoURI;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    return await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

async function listDatabases(client){
  const databasesList = await client.db().admin().listDatabases();

  // console.log("Databases:");
  // databasesList.databases.forEach(db => console.log(` - ${db.name}`));
  return databasesList.databases.map(item => item.name);
}
