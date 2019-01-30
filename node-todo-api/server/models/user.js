const mongoose = require('mongoose');
const validator = require('validator');

// {
//     email: 'bohdanbrn@gmail.com',
//     password: 'snaqqbvmuypow3rcxbzxnrd',
//     tokens: [{
//         access: 'auth',
//         token: 'poiuczdspsrtdhja3wtrtibcfzsdgipoe4'
//     }]
// }

let User = mongoose.model('Users', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        validator: validator.isEmail,
        message: '{VALUE} is not a valid email'
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

module.exports = {User};
