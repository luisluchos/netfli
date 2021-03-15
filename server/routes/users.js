const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller.js');

/* GET users . */
router.get('/', usersController.getUsers);

/* GET one user . */
router.get('/:id', usersController.detailUser);

module.exports = router;