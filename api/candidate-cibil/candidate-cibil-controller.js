const CandidteCibil = require("./candidte-cibil"); // Ensure the correct path
const REST_API = require("../../util/api-util");

// Define the createCandidate controller function
const createCandidateCibil = async (req, res) => {
  const response = await REST_API._add(req, res, CandidteCibil);
  return response;
};

const getCandidteListCibil = async (req, res) => {
  const response = await REST_API._getAll(req, res, CandidteCibil);
  return response;
};

const getCibilByCandidteId = async (req, res) => {
  const { candidateId } = req.params;
  const response = await REST_API._getDataListById(
    req,
    res,
    CandidteCibil,
    "candidate_id",
    candidateId
  );
  return response;
};
const updateCandidteCibil = async (req, res) => {
  const response = await REST_API._update(req, res, CandidteCibil);
  return response;
};

const deleteCandidateCibil = async (req, res) => {
  const response = await REST_API._delete(req, res, CandidteCibil);
  return response;
};

exports.createCandidateCibil = createCandidateCibil;
exports.getCandidteListCibil = getCandidteListCibil;
exports.getCibilByCandidteId = getCibilByCandidteId;
exports.updateCandidteCibil = updateCandidteCibil;
exports.deleteCandidateCibil = deleteCandidateCibil;
