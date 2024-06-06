const State = require("./state"); // Ensure the correct path
const REST_API = require("../../util/api-util");


const getStateList = async (req, res) => {
  const response = await REST_API._getAll(req, res, State);
  return response;
};

const getStateById = async (req, res) => {
  const { stateId } = req.params;
  const response = await REST_API._getDataListById(
    req,
    res,
    State,
    "id",
    stateId
  );
  return response;
};


exports.getStateList = getStateList;
exports.getStateById = getStateById;
