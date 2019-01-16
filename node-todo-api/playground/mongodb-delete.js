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

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });


    // // delete Users
    // db.collection('Users').deleteMany({name: 'Bohdan'}).then((result) => {
    //     console.log(result);
    // });

    // find and delete
    db.collection('Users').findOneAndDelete({name: 'Bohdan 5'}).then((result) => {
        console.log(result.value._id);
    });

    // client.close();
  });

