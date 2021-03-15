const express = require('express');
const commentController = require('../controllers/comment.controller.js');
const router = express.Router();



/* GET comments listing. */
/* router.get('/', function(req, res, next) {
  res.json({comments: [{id: 1, name: 'me'}]})
}); */


/* GET all comments . */
router.get(('/'), commentController.getComments)


/* GET one comments . */
router.get('/:id', commentController.detailComment);

module.exports = router;