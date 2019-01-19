const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// let Todo = mongoose.model('Todo', {
//     text: {
//         type: String
//     },
//     completed: {
//         type: Boolean
//     },
//     compleatedAt: {
//         type: Number
//     }
// });

// let newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then((res) => {
//     console.log('Saved todo', res);
// }, (err) => {
//     console.log('Unable to save todo', err);
// });

let Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Date,
        default: Date.now
    },
    testNumber: {
        type: Number
    }
});

let newTodo = new Todo({
    text: "test text",
    completed: true,
    testNumber: 123
});

newTodo.save().then((res) => {
    console.log('Saved successfully', res);
}, (err) => {
    console.log('Unable to save todo', err);
});;