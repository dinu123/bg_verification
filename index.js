const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'bgverification',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
module.exports = connection.promise();
