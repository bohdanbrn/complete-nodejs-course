const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


/* Get Todos */

// let id = '5c463bd96fa76c2cb02fa3e2f';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos:', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo:', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by id:', todo);
// }).catch((err) => console.log(err));



/* Get Users */

let id = "5c4362993ffe820edcc178ab";

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

User.find({
    _id: id
}).then((users) => {
    console.log('Users:', JSON.stringify(users, undefined, 2));
});

User.findOne({
    _id: id
}).then((user) => {
    if (!user) {
        return console.log('User not foound');
    }
    console.log('User:', JSON.stringify(user, undefined, 2));
});

User.findById(id).then((user) => {
    if (!user) {
        console.log('User not found');
    }
    console.log('User by id:', JSON.stringify(user, undefined, 2));
}, (err) => {
    console.log(err);
});