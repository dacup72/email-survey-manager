module.exports = (req, res, next) => {
  if(!req.user) {
    // 401 means unauthorized (need to be logged in)
    return res.status(401).send({ error: 'You must log in!' });
  }

  // If there is a user run the next middleware or request handler
  next()
};