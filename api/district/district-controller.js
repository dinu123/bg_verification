const District = require("./district"); // Ensure the correct path
const REST_API = require("../../util/api-util");


const getDistrictList = async (req, res) => {
  const response = await REST_API._getAll(req, res, District);
  return response;
};

const getDistrictById = async (req, res) => {
  const { districtId } = req.params;
  const response = await REST_API._getDataListById(
    req,
    res,
    District,
    "id",
    districtId
  );
  return response;
};


exports.getDistrictList = getDistrictList;
exports.getDistrictById = getDistrictById;
