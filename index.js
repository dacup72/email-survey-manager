// Imports
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
// Cookie based session middleware 
const cookieSession = require('cookie-session');
const passport = require('passport');

// Initialize mongoose / mongoDB collection for users
require('./models/User');

// Initialize Passport.js config
require('./services/passport');

// Connect to chosen mongoURI
mongoose.connect(keys.mongoURI);

// Initializes express 
const app = express();

// Set up cookie session
app.use(
  // Extracts cookie data and assigns it to req.session
  cookieSession({
    // Cookies will last 30 days before they expire
    maxAge: 30 * 24 * 60 * 60 * 1000,
    // Automatically encripts the cookie
    keys: [keys.cookieKey]
  })
);

// Initialize Passport with Express
app.use(passport.initialize());
app.use(passport.session());

// Routes
require('./routes/authRoutes')(app); 

// Sets up PORT for Node.js to listen on.
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("App running on port: " + PORT);
});
