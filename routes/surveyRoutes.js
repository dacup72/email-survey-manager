// Require mongoose to fix "cannot require mongoose model multiple times" error with some testing frameworks
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
  // Post route for creating new surveys sending big emails with those surveys
  // Make sure user is logged in (functions in the line of the post request are envoked in order)
  // Make sure user has enough credits
  app.post("/api/surveys", requireLogin, requireCredits, (req, res) => {
    // ES6 destructuring to obtain differenty properties from an object
    const { title, subject, body, recipients } = req.body;
      // Examples:
      // const title = req.body.title;
      // const subject = req.body.subject;

    // create new Survey model object for creating and send new emails
    const survey = new Survey({
      // ES6 syntax for defining "exact same" named key value pairs
      title,
      subject,
      body,
      // Takes comma delimited string of emails, splits it into array, and returns array of email objects containing white space trimed email addresses
      recipients: recipients.split(",").map(email => ({ email: email.trim() })),
      // Passes in mongooses automatically generated id for the User model 
      _user: req.user.id,
      dateSent: Date.now()
    });


    // Send emails to sendGrid
    const mailer = new Mailer(survey, surveyTemplate(survey));
    mailer.send();
  });
};