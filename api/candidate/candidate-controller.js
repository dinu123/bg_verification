const Candidte = require("./candidte"); // Ensure the correct path
const CandidateAddress = require("../candidate-address/candidate-address");
const REST_API = require("../../util/api-util");

// Define the createCandidate controller function
const createCandidate = async (req, res) => {
  const response = await REST_API._add(req, res, Candidte);
  res.status(200).json(response);
};

const getCandidteList = async (req, res) => {
  const response = await REST_API._getAll(req, res, Candidte);
  console.log("Response" + response)
  if(response) {
    console.log("Dinesh");
  } else {
    console.log("Kallani");
  }
  res.status(200).json(response);
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
  res.status(201).json(response);
};
const updateCandidte = async (req, res) => {
  const response = await REST_API._update(req, res, Candidte);
  res.status(201).json(response);
};

const deleteCandidate = async (req, res) => {
  const response = await REST_API._delete(req, res, Candidte);
  res.status(201).json(response);
};

exports.createCandidate = createCandidate;
exports.getCandidteList = getCandidteList;
exports.getCandidteById = getCandidteById;
exports.updateCandidte = updateCandidte;
exports.deleteCandidate = deleteCandidate;
