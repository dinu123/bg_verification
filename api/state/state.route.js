const express = require('express');
const router = express.Router();
const stateController = require('./state-controller'); // Ensure the correct path and export

// Define a route for creating a user

router.get('/', stateController.getStateList);
 router.get('/:stateId', stateController.getStateById);

module.exports = router; // Export the router
