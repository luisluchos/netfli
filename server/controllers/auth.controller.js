const userModel = require('../models/users.model');

module.exports = {
  login: (async (req, res, next) => {
    console.log(req.body)
    let user = await userModel.findOne({email: req.body.email});
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({error: 'User not found'});
    }
  })
}