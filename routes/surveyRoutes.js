const Path = require('path-parser').default;
const _ = require('lodash');
const { URL } = require('url');
// Require mongoose to fix "cannot require mongoose model multiple times" error with some testing frameworks
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
  // Get route to simply display a thank you message to user after filling out the survey
  app.get('/api/surveys/thanks', (req, res) => {
    res.send('Thank you for completing the survey!');
  });

  // Webhooks handler to recieve survey responses and update the database with those responses
  app.post('/api/surveys/:surveyId/:choice', (req, res) => {
    // extracts specific pieces of the url
    const p = new Path('/api/surveys/:surveyId/:choice');

    const events = _.chain(req.body)
      .map(({ url, email }) => {
        // new URL extracts the route from the sendgrid object recieved
        // p.test(pathname) will return null if either surveyId or choice are not recieved
        const match = p.test(new URL(url).pathname);
        if (match) {
          return { email, surveyId: match.surveyId, choice: match.choice };
        };
      })
      // compact function iterates through an array and removes all undefineds from it
      .compact()
      // removes 'email' and 'surveyId; duplicates from compactEvents
      .uniqBy('email', 'surveyId')
      .each(({ email, surveyId, choice }) => {
        // Finds specific recipient that clicked on the specific survey in their email
        // and updates the responded value to true if its false
        Survey.updateOne({
          _id: surveyId,
          recipients: {
            $elemMatch: { email: email, responded: false }
          }
        }, {
            // Mongo operator that finds choice property and increments it by 1
            $inc: { [choice]: 1 },
            // Mongo operator that in the survey that was found looks at its reciepients and uses
            // the $ (index num) to find the one we care about and updates the responded property on it to true
            $set: { 'recipients.$.responded': true },
            lastResponded: new Date()
          }
        // exec() executes the query
        ).exec();

      })
      .value();

    // Respond to SendGrid so that they do not ping us with the same object
    // multiple times due to us not sending a response
    res.send({});
  });

  // Post route for creating new surveys sending big emails with those surveys
  // Make sure user is logged in (functions in the line of the post request are envoked in order)
  // Make sure user has enough credits
  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    // ES6 destructuring to obtain differenty properties from an object
    const {
      title,
      subject,
      body,
      recipients
    } = req.body;
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
      recipients: recipients.split(",").map(email => ({
        email: email.trim()
      })),
      // Passes in mongooses automatically generated id for the User model 
      _user: req.user.id,
      dateSent: Date.now()
    });


    // Send emails to sendGrid
    const mailer = new Mailer(survey, surveyTemplate(survey));

    try {
      await mailer.send();
      await survey.save();

      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user);
    } catch (err) {
      // status 422 means unproccessable entity (something went wrong with the data you sent us)
      res.status(422).send(err);
    }
  });
};