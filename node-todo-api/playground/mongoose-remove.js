const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findByIdAndRemove('5c4dbf63b3f0429c61cb1688').then((todo) => {
//     console.log(todo);
// });

Todo.findOneAndRemove({_id: '5c4dbf63b3f0429c61cb1688'}).then((todo) => {
    console.log(todo);
});