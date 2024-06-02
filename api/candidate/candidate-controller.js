const Candidte = require('./candidte'); // Ensure the correct path

// Define the createCandidate controller function
const createCandidate = async (req, res) => {
  try {
    const response = await Candidte.create(req.body);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCandidteList = async (req, res) => {
    try {
      const response = await Candidte.findAll();
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const getCandidteById = async (req, res) => {
    const {candidateId} = req.params; 
    try {
      const response = await Candidte.findByPk(candidateId);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  const updateCandidte = async (req, res) => {
    try {
      const response = await Candidte.update(req.body, {
        where: {
          id: req.body.id,
        },
      },);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const deleteCandidate = async (req, res) => {
    try {
      const response = await Candidte.destroy({
        where: {
          id: req.body.id,
        },
      },);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
exports.createCandidate = createCandidate;
exports.getCandidteList = getCandidteList;
exports.getCandidteById = getCandidteById;
exports.updateCandidte = updateCandidte;
exports.deleteCandidate = deleteCandidate;

