const jwt = require('jsonwebtoken')


module.exports = function(req, res, next){
   
   // if resource needs auth
   //get the token from the header
   console.log("header middelware:",req.headers.authorization.slice(7))
   const token = req.headers.authorization.slice(7)
   //check if th token is (jwt)
   const verified = jwt.verify(token, process.env.JWT_KEY)
   console.log(verified);
   //valid => decode the user data and pass
   //not valid ,res with error
   next();
}