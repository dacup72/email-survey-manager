//Imports
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const util = require('util');

// Configuration for Google authentication
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, 
// Recieves the tokens and profile object for the user after /auth/google/callback route.
(accessToken, refreshToken, profile, done) => {
  console.log('accessToken: ' + accessToken);
  console.log('refreshToken: ' + refreshToken);
  // Util.inspect method is used to view full object in terminal.
  console.log('profile: ' + util.inspect(profile, false, null));
})
);
