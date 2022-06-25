var db = require('../db').dbConnection;
const mysql = require('mysql2');

module.exports = {
  getAll: function (req, callback) {
    let queryString = 'SELECT * FROM users';

    db.query(queryString, (err, data) => {
      if (err) {
        callback(err, data);
      } else {
        callback(null, data);
      }

    });
  },
  create: function (username, callback) {

  let queryString = `INSERT INTO users (username) VALUES ("${username}")`;

  db.query(queryString, (err, data) => {
    if (err) {
      callback(err, message);
    } else {
      callback(null, "db: success");
    }
  });

  }
};
