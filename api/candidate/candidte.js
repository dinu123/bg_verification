const { DataTypes, Model } = require("sequelize");
const sequelize = require("../../config/data-source"); // Import the sequelize instance

class Candidte extends Model {}
Candidte.init(
  {
    notify_candidate: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    notify_client: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    notify_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    form_field_by: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dob: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    father_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mobile_no: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    applicant_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    client_location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    client_process: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    candidate_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    updatedAt: {
      type: DataTypes.TIME,
      allowNull: true,
    },
  },
  {
    sequelize, // Pass the sequelize instance here
    modelName: "Candidte", // Choose the model name
    tableName: "candidate",
  }
);

module.exports = Candidte; // Use module.exports for consistency
