// Imports
const express = require('express');

// Initialize Passport.js config
require('./services/passport');

// Initializes express 
const app = express();

// Routes
require('./routes/authRoutes')(app);

// Sets up PORT for Node.js to listen on.
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("App running on port: " + PORT);
});
