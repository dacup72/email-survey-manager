const keys = require('../config/keys');
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = app => {
  // Handle token object recieved back from stripe api
  // Runs requireLogin middleware automatically whenever a req comes in from the POST method
  app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    });
    // Updates the database user model
    req.user.credits += 5;
    // Saves the update in the database and saves it in new user variable
    const user = await req.user.save();

    res.send(user);
  });
};

