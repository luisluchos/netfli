const express = require('express');
const router = express.Router();

const moviesRouter = require('./movies');
const usersRouter = require('./users');
const commentsRouter = require('./comments');
const authRouter = require('./auth');


router.use('/movies', moviesRouter)
router.use('/users', usersRouter)
router.use('/comments', commentsRouter)
router.use('/auth', authRouter)

//fallback route
router.use('*', (req, res, next)=>{
  res.status(404).json({
    error: 'Not found'
  })
});


module.exports = router;
