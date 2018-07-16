// Imports
const passport = require('passport');

module.exports = app => {
  // Make initial request to Google to recieve the callback code 
  // and redirect to /auth/google/callback.
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  // Send request to Google to exchange the recieved code for
  // the users profile information.
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  // Log out the current user
  app.get(
    '/api/logout',
    (req, res) => {
      req.logout();
      res.redirect("/");
    }
  );

  // Gets access to authenticated user and sends it to front end
  app.get(
    '/api/current_user',
    (req, res) => {
      // "req.session" contains the cookies data
      // res.send(req.session);
      res.send(req.user);
    }
  );

};
