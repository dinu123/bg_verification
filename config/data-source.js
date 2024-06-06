const { Sequelize } = require('sequelize');
const mysql = require('mysql2');

const sequelize = new Sequelize('bgverification', 'bgverification', 'bgverification!@#45', {
  host: 'localhost',
  dialect: 'mysql',
  dialectModule: require('mysql2'),
  dialectOptions: {
    options: {
      encrypt: true, // Use this if you're on Windows Azure
    },
  },
});

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize; // Export the sequelize instance directly
