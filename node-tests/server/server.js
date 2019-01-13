const request = require('supertest')
const express = require('express');

let app = express();

app.get('/', (req, res) => {
    // res.status(200).send('Hello world!');
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

app.get('/users/', (req, res) => {
    res.send([
        {
            name: "Bohdan",
            age: 23
        },
        {
            name: "Andrew",
            age: 25
        },
        {
            name: "John",
            age: 28
        }
    ])
})

app.listen(3000);
module.exports.app = app;