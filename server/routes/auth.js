const express = require('express');
const router = express.Router();
//const commentsController = require('../controllers/comment.js');


/* GET */
//login page: storing and comparing email and password,and redirecting to home page after login

router.post('/', function (req, res) {
    db.User.findOne({
         where: {
             email: req.body.email
                }
    }).then(function (user) {
        if (!user) {
           res.redirect('/');
        } else {
bcrypt.compare(req.body.password, user.password, function (err, result) {
       if (result == true) {
           res.redirect('/home');
       } else {
        res.send('Incorrect password');
        res.redirect('/');
       }
     });
    }
 });
});



module.exports = router;