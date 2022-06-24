var db = require('../db').dbConnection;
const mysql = require('mysql2');

module.exports = {
  getAll: function () {}, // a function which produces all the messages
  create: function (message, username, roomname, callback) {

    // FINDING OBJECT AND NOT A NUMBER
    var userID = db.query(`SELECT id FROM users WHERE username = "${username}"`);

    let queryString = `INSERT INTO messages (user_id, input, roomname) VALUES (${userID}, "${message}", "${roomname}")`;

    db.query(queryString, (err, data) => {
      if (err) {
        callback(err, Object.values(queryString));
      } else {
        callback(null, "db: success");
      }

    });

  } // a function which can be used to insert a message into the database

};
