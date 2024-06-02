const User = require("./user"); // Ensure the correct path

const REST_API = require("../../util/api-util");

// Define the createUser controller function
const createUser = async (req, res) => {
  const response = await REST_API._add(req, res, User);
  return response;
};

const getUsers = async (req, res) => {
  const response = await REST_API._getAll(req, res, User);
  return response;
};

const getUserById = async (req, res) => {
  const { userId } = req.params;
  const response = await REST_API._getDataListById(
    req,
    res,
    User,
    "id",
    userId
  );
  return response;
};

const updateUser = async (req, res) => {
  const response = await REST_API._update(req, res, User);
  return response;
};

const deleteUser = async (req, res) => {
  const response = await REST_API._delete(req, res, User);
  return response;
};

exports.createUser = createUser;
exports.getUsers = getUsers;
exports.getUserById = getUserById;
exports.updateUser = updateUser;

exports.deleteUser = deleteUser;
