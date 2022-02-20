const { MongoClient } = require('mongodb');
const keys = require('../config/keys');

module.exports.addMessage = async function() {
  const uri = keys.mongoURI;
  const client = new MongoClient(uri);

  const newListing = {
    "content": "Имя Фамилия оплатил занятие",
    "action": "redirect",
    "location": "dashboard/payment"
  }

  try {
    await client.connect();
    return await createListing(client, newListing);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

module.exports.getMessages = async function() {
  const uri = keys.mongoURI;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    return await getListing(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

async function createListing(client, newListing){
  const result = await client.db("n-code-study").collection("messages").insertOne(newListing);
  console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function getListing(client) {
  const nameOfListing = 'redirect';
  const cursor = await client.db("n-code-study").collection("messages").find({action: nameOfListing});

  if (cursor) {
    return await cursor.toArray();
  } else {
    console.log(`No listings found with the name '${nameOfListing}'`);
  }
}
