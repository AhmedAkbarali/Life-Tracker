const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
   googleID: String,
   name: String,
   username: String,
   email: String
});

mongoose.model('users', userSchema);