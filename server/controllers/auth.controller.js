const userModel = require('../models/users.model');


var bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


module.exports = {
  login: async (req, res, next) => {
    let user = await userModel.findOne({email: req.body.email});
    
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)){
        // TODO generate Token
        let token = jwt.sign({name: user.name, email: user.email}, process.env.JWT_KEY);
        return res.json({token: token });
      }
      res.status(400).json({error: 'Password invalid'});
    } else {
      res.status(404).json({error: 'User not found'});
    }
  }
}
