const Client = require("./client"); // Ensure the correct path
const REST_API = require("../../util/api-util");

// Define the createClient controller function
const createClient = async (req, res) => {
  const response = await REST_API._add(req, res, Client);
  return response;
};

const getClientList = async (req, res) => {
  const response = await REST_API._getAll(req, res, Client);
  return response;
};

const getClinetById = async (req, res) => {
  const { ClientId } = req.params;
  const response = await REST_API._getDataListById(
    req,
    res,
    Client,
    "id",
    ClientId
  );
  return response;
};
const updateClient = async (req, res) => {
  const response = await REST_API._update(req, res, Client);
  return response;
};

const deleteClient = async (req, res) => {
  const response = await REST_API._delete(req, res, Client);
  return response;
};

exports.createClient = createClient;
exports.getClientList = getClientList;
exports.getClinetById = getClinetById;
exports.updateClient = updateClient;
exports.deleteClient = deleteClient;
