const keys = require('../config/keys');
const stripe = require("stripe")(keys.stripeSecretKey);

module.exports = app => {
  // Handle token object recieved back from stripe api
  app.post('/api/stripe', async (req, res) => {
    if (!req.user) {
      // 401 means unauthorized (need to be logged in)
      return res.status(401).send({ error: 'You must log in!' });
    }

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

