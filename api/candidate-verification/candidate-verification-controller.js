const CandidteVerification = require("./candidte-verification"); // Ensure the correct path
const REST_API = require("../../util/api-util");

// Define the createCandidate controller function
const createCandidateVerification = async (req, res) => {
  const response = await REST_API._add(req, res, CandidteVerification);
  return response;
};

const getCandidteListVerification = async (req, res) => {
  const response = await REST_API._getAll(req, res, CandidteVerification);
  return response;
};

const getVerificationByCandidteId = async (req, res) => {
  const { candidateId } = req.params;
  const response = await REST_API._getDataListById(
    req,
    res,
    CandidteVerification,
    "candidate_id",
    candidateId
  );
  return response;
};
const updateCandidteVerification = async (req, res) => {
  const response = await REST_API._update(req, res, CandidteVerification);
  return response;
};

const deleteCandidateVerification = async (req, res) => {
  const response = await REST_API._delete(req, res, CandidteVerification);
  return response;
};

exports.createCandidateVerification = createCandidateVerification;
exports.getCandidteListVerification = getCandidteListVerification;
exports.getVerificationByCandidteId = getVerificationByCandidteId;
exports.updateCandidteVerification = updateCandidteVerification;
exports.deleteCandidateVerification = deleteCandidateVerification;
