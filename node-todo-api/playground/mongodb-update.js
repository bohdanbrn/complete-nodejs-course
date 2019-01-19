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
  
    const db = client.db(dbName);

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c3d02a1da0ede08b402c55a')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((res) => {
    //     console.log(res);
    // }, (err) => {
    //     console.log(err);
    // });

    db.collection('Users').findOneAndUpdate({
        name: 'Bohdan 6'
    }, {
        $set: {name: 'Bohdan'},
        $inc: {age: 1}
    }, {
        returnOriginal: false
    }).then((res) => {
        console.log(res);
    }, (err) => {
        console.log(err);
    })

    // client.close();
  });

