const InternalTeam = require("./internal_team"); // Ensure the correct path
const REST_API = require("../../util/api-util");

// Define the createClient controller function
const createInternalTeam = async (req, res) => {
  const response = await REST_API._add(req, res, InternalTeam);
  return response;
};

const getInternalTeamList = async (req, res) => {
  const response = await REST_API._getAll(req, res, InternalTeam);
  return response;
};

const getInternalTeamById = async (req, res) => {
  const { internalTeamId } = req.params;
  const response = await REST_API._getDataListById(
    req,
    res,
    InternalTeam,
    "id",
    internalTeamId
  );
  return response;
};
const updateInternalTeam = async (req, res) => {
  const response = await REST_API._update(req, res, InternalTeam);
  return response;
};

const deleteInternalTeam = async (req, res) => {
  const response = await REST_API._delete(req, res, InternalTeam);
  return response;
};

exports.createInternalTeam = createInternalTeam;
exports.getInternalTeamList = getInternalTeamList;
exports.getInternalTeamById = getInternalTeamById;
exports.updateInternalTeam = updateInternalTeam;
exports.deleteInternalTeam = deleteInternalTeam;
