const Candidte = require("./candidte"); // Ensure the correct path
const REST_API = require("../../util/api-util");

// Define the createCandidate controller function
const createCandidate = async (req, res) => {
  const response = await REST_API._add(req, res, Candidte);
  return response;
};

const getCandidteList = async (req, res) => {
  const response = await REST_API._getAll(req, res, Candidte);
  return response;
};

const getCandidteById = async (req, res) => {
  const { candidateId } = req.params;
  const response = await REST_API._getDataListById(
    req,
    res,
    Candidte,
    "id",
    candidateId
  );
  return response;
};
const updateCandidte = async (req, res) => {
  const response = await REST_API._update(req, res, Candidte);
  return response;
};

const deleteCandidate = async (req, res) => {
  const response = await REST_API._delete(req, res, CandidteAddress);
  return response;
};

exports.createCandidate = createCandidate;
exports.getCandidteList = getCandidteList;
exports.getCandidteById = getCandidteById;
exports.updateCandidte = updateCandidte;
exports.deleteCandidate = deleteCandidate;
