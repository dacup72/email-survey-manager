// Imports
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

// Initialize mongoose / mongoDB collection for users
require('./models/User');

// Initialize Passport.js config
require('./services/passport');

const mongoURI = process.env.MONGODB_URI || keys.mongoURI;
// Connect mongoose to mLab cloud database
// mongoose.connect(mongoURI).catch(function(err) {
  // If the connection to mLab fails connect to localhost database
  // if(err) {
  //   console.log('Connection error: ' + err);
    mongoose.connect('mongodb://localhost/emailsurveymanager');
    // console.log('Database connected on Localhost');
  // } else {
  //   console.log('Database connected to mLab');
  // }
// });

// Initializes express 
const app = express();

// Routes
require('./routes/authRoutes')(app); 

// Sets up PORT for Node.js to listen on.
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("App running on port: " + PORT);
});
