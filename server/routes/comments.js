const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/comment.js');


/* GET comments listing. */
router.get('/', function(req, res, next) {
  res.json({comments: [{id: 1, name: 'me'}]})
});

/* GET one comments . */
router.get('/:id', commentsController.detailComment);

module.exports = router;