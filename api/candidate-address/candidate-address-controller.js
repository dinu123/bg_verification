const CandidteAddress = require('./candidate-address'); // Ensure the correct path

// Define the createCandidate controller function
const createCandidateAddress = async (req, res) => {
  try {
    const response = await CandidteAddress.create(req.body);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCandidteAddressList = async (req, res) => {
    try {
      const response = await CandidteAddress.findAll();
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const getAddressByCandidteId = async (req, res) => {
    const {candidateId} = req.params; 
    try {
      const response = await CandidteAddress.findAll({ where: { candidate_id: candidateId } });;
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  const updateCandidteAddress = async (req, res) => {
    try {
      const response = await CandidteAddress.update(req.body, {
        where: {
          id: req.body.id,
        },
      },);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const deleteCandidateAddress = async (req, res) => {
    try {
      const response = await CandidteAddress.destroy({
        where: {
          id: req.body.id,
        },
      },);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
exports.createCandidateAddress = createCandidateAddress;
exports.getCandidteAddressList = getCandidteAddressList;
exports.getAddressByCandidteId = getAddressByCandidteId;
exports.updateCandidteAddress = updateCandidteAddress;
exports.deleteCandidateAddress = deleteCandidateAddress;

