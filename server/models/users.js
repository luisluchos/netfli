
const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    password: String
    
});

const users = mongoose.model('users', usersSchema);  // el primer parámetro es el nombre de la tabla

module.exports = users;
