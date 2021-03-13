const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/movies.js');

/* GET movies . */
router.get('/', moviesController.getMovies);

/* GET one movie . */
router.get('/:id', moviesController.detailMovies);



module.exports = router;