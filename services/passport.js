//Imports
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');


// Gaining access to the user model class (collection)
// Having one argument for .model() means we are fetching data from that collection
const User = mongoose.model('users');

// Configuration for Google authentication
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, 
// Recieves the tokens and profile object for the user after /auth/google/callback route.
// Creates and saves new User collection instance for the specific user to the users collection.
// Also checks to see if the user already exists when logging in.
(accessToken, refreshToken, profile, done) => {
  User.findOne({ googleId: profile.id })
  .then(existingUser => {
    if(existingUser) {
      // User's google ID already exists in database
      done(null, existingUser);
    }
    else {
      // User's google ID does NOT exist in the database so make a new entry in the database for that user
      new User({googleId: profile.id})
      .save()
      .then(user => done(null, user));
    }
  })

 
    
  
  

  
})
);
