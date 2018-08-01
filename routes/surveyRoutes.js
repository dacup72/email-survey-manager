// Require mongoose to fix "cannot require mongoose model multiple times" error with some testing frameworks
const mongoose = require("mongoose");

const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");

const Survey = mongoose.model('surveys');

module.exports = app => {
  // Post route for sending surveys
  // Make sure user is logged in (functions in the line of the post request are envoked in order)
  // Make sure user has enough credits
  app.post("api/surveys", requireLogin, requireCredits, (req, res) => {
    // ES6 destructuring to obtain differenty properties from an object
    const { title, subject, body, recipients } = req.body;

    // ES6 syntax for defining "exact same" named key value pairs
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: {
        email: recipients
      }
    });
  });
};