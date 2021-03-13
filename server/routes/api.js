const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/comment.js');
const usersController = require('../controllers/users.js')

/* GET users listing. */
router.get('/comments', function(req, res, next) {
  res.json({comments: [{id: 1, name: 'me'}]})
});

/* GET one comments . */
router.get('/comments/:id', commentsController.detailComment);

/* GET one user . */
router.get('/user/:id', usersController.detailUser);

/* GET movies . */
router.get('/movies', function(req, res, next) {
  res.json({list: [{id: 1, name: 'Kill Bill'}, {id: 2, name: 'Pulp Fiction'}]})
});

module.exports = router;
