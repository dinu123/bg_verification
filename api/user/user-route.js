const express = require('express');
const router = express.Router();
const userController = require('./user-controller'); // Ensure the correct path and export

// Define a route for creating a user
router.post('/', userController.createUser);
router.put('/', userController.updateUser);

router.get('/', userController.getUsers);
router.get('/:userId', userController.getUserById);
router.delete('/', userController.deleteUser);

module.exports = router; // Export the router
