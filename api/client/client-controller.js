const Client = require("./client"); // Ensure the correct path
const REST_API = require("../../util/api-util");

// Define the createClient controller function
const createClient = async (req, res) => {
  const response = await REST_API._add(req, res, Client);
  res.status(200).json(response);
};

const getClientList = async (req, res) => {
  const response = await REST_API._getAll(req, res, Client);
  res.status(200).json(response);
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
  res.status(201).json(response);
};
const updateClient = async (req, res) => {
  const response = await REST_API._update(req, res, Client);
  res.status(201).json(response);
};

const deleteClient = async (req, res) => {
  const response = await REST_API._delete(req, res, Client);
  res.status(201).json(response);
};

exports.createClient = createClient;
exports.getClientList = getClientList;
exports.getClinetById = getClinetById;
exports.updateClient = updateClient;
exports.deleteClient = deleteClient;
