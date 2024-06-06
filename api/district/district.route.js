const express = require('express');
const router = express.Router();
const districtController = require('./district-controller'); // Ensure the correct path and export

// Define a route for creating a user

router.get('/', districtController.getDistrictList);
 router.get('/:districtId', districtController.getDistrictById);

module.exports = router; // Export the router
