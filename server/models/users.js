var db = require('../db').dbConnection;
const mysql = require('mysql2');

module.exports = {
  getAll: function () {},
  create: function (username, callback) {

  let queryString = `INSERT INTO users (username) values ("${username}")`

  db.query(queryString, (err, data) => {
    if (err) {
      callback(err, message);
    } else {
      callback(null, "db: success");
    }
  });

  }
};
