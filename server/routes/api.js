var express = require('express');
var router = express.Router();

/* GET api. */
router.get('/comments', function(req, res, next) {
  res.json({"comments":[{"id":1,"name":"me"}]});
});

module.exports = router;