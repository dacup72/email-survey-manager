// Imports
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Creating the new Schema to establish rules for the mongoose user class (collection)
const userSchema = new Schema({
  googleId: String
});

// Setting up the database collection called users
// Having 2 arguments means we are "setting" the class (collection)
mongoose.model('users', userSchema);