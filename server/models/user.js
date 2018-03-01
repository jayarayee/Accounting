const mongoose = require('mongoose');
const validator = require('validator');

// {
//     email: 'rayeejaya@gmail.com',
//     password: 'adpoanwerrgrhtjk',
//     tokens:[{
//         access: 'auth',
//         token: 'pornpsnkfbiurosnrunr'
//     }]
// }

var User = mongoose.model('User', {
    email: {
        type: String,
        require: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate:{
            validator: validator.isEmail,
            message: '{VALUE} not a valid email'
        }
    },
    password:{
        type: String,
        require: true,
        minlength: 6
    },
    tokens: [{
        access:{
            type: String,
            required: true
        },
        teken:{
            type: String,
            required: true
        }
    }]
});

module.exports = {User};