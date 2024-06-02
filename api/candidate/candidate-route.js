const express = require('express');
const router = express.Router();
const candidateController = require('./candidate-controller'); // Ensure the correct path and export

// Define a route for creating a user
 router.post('/', candidateController.createCandidate);
router.put('/', candidateController.updateCandidte); 

router.get('/', candidateController.getCandidteList);
 router.get('/:candidateId', candidateController.getCandidteById);
router.delete('/', candidateController.deleteCandidate); 

module.exports = router; // Export the router
