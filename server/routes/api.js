const express = require('express');
const router = express.Router();

const moviesRouter = require('./movies');
const usersRouter = require('./users');
const commentsRouter = require('./comments');


router.use('/movies', moviesRouter)
router.use('/users', usersRouter)
router.use('/comments', commentsRouter)



module.exports = router;
