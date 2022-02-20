const { MongoClient } = require('mongodb');
const keys = require('../config/keys');

module.exports.addPayment = async function() {
  const uri = keys.mongoURI;
  const client = new MongoClient(uri);

  const newListing = {
    "cardAmount": 1000,
    "amount": 200,
    "bookLessons": 8,
    "confirmed": 5,
    "paymentGrid": [
      {
        "date": "15.10.21",
        "operation": "Пополнение счета",
        "operationShort": "Пополнение",
        "summ": 500,
        "remainder": 1000
      },
      {
        "date": "17.10.21",
        "operation": "Списание за урок",
        "operationShort": "Списание",
        "summ": -250,
        "remainder": 500
      },
      {
        "date": "21.10.21",
        "operation": "Списание за урок",
        "operationShort": "Списание",
        "summ": -250,
        "remainder": 750
      },
      {
        "date": "22.10.21",
        "operation": "Пополнение счета",
        "operationShort": "Пополнение",
        "summ": 1000,
        "remainder": 1000
      },
      {
        "date": "27.10.21",
        "operation": "Списание за урок",
        "operationShort": "Списание",
        "summ": -250,
        "remainder": 0
      },
      {
        "date": "1.11.21",
        "operation": "Списание за урок",
        "operationShort": "Списание",
        "summ": -250,
        "remainder": 250
      },
      {
        "date": "8.11.21",
        "operation": "Списание за урок",
        "operationShort": "Списание",
        "summ": -250,
        "remainder": 500
      }
    ]
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

module.exports.getPayment = async function() {
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
  const result = await client.db("n-code-study").collection("payment").insert(newListing);
  console.log(`New listing created with the following id: ${result.insertedId}`);
}

async function getListing(client) {
  const cursor = await client.db("n-code-study").collection("payment").find({});

  if (cursor) {
    return await cursor.toArray();
  } else {
    console.log(`No listings found`);
  }
}
