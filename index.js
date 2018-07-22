// Imports
const express = require('express');
const bodyParser = require('body-parser');
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

// Adds body parser middleware to express
app.use(bodyParser.json());

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
// sets req.user to the current user database object that is logged in
app.use(passport.initialize());
app.use(passport.session());

// Routes
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

// If in production mode then handle this...
if (process.env.NODE_ENV === 'production') {
  // If Express recognizes this route from the front end react router then
  // Express will server up production assets
  // like main.js file, or main.css file
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route from react routes (front end routes)
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
};

// Sets up PORT for Node.js to listen on.
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("App running on port: " + PORT);
});
