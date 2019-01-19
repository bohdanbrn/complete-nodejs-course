const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// Todo
// let Todo = mongoose.model('Todo', {
//     text: {
//         type: String,
//         required: true,
//         minlength: 1,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     },
//     completedAt: {
//         type: Date,
//         default: Date.now
//     }
// });

// let newTodo = new Todo({
//     text: "test text"
// });

// newTodo.save().then((res) => {
//     console.log('Saved successfully', res);
// }, (err) => {
//     console.log('Unable to save todo', err);
// });


// User
let Users = mongoose.model('Users', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

let newUser = new Users({
    email: "test@mail.com",
});

newUser.save().then((res) => {
    console.log('Saved successfully', res);
}, (err) => {
    console.log('Unable to save user', err);
});
