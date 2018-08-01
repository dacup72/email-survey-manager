module.exports = (req, res, next) => {
  if(req.user.credits < 1) {
    // Any 400 range status code means something went wrong with the request (bad request)
    // status 403 (Forbidden)
    // User does not have enough credits
    return res.status(403).send({ error: 'Not enough credits!' });
  }

  // If user has enough credits then run the next middleware or request handler
  next()
};