const express = require('express');
const {check} = require('express-validator');

const userController = require('../controllers/user-controller')

const router = express.Router();

router.get('/', userController.getAllUserList)

module.exports = router;