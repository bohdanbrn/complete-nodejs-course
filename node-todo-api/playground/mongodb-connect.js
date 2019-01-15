// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'TodoApp';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log("Connected successfully to server");
  
    // const db = client.db(dbName);

    // db.collection('Users').insertOne({
    //     name: 'Bohdan',
    //     age: '23',
    //     location: 'Lviv'
    // }, (err, result) =>  {
    //     if (err) {
    //         return console.log('Unable to insert user', err);
    //     }

    //     // console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // });
  
    client.close();
  });

