var db = require('../db').dbConnection;
const mysql = require('mysql2');

module.exports = {
  getAll: function () {}, // a function which produces all the messages
  create: function (message, username, roomname, callback) {

    var userID = db.query(`SELECT id FROM users WHERE username = ${username})`);

    var roomID = db.query(`SELECT id FROM rooms WHERE EXISTS roomname = ${roomname}`);

    let queryString = `INSERT INTO messages (user_id, input, room_id) VALUES (${userID}, "${message}", ${roomID})`;

    db.query(queryString, (err, data) => {
      if (err) {
        callback(err, message);
      } else {
        callback(null, "db: success");
      }

    });

  } // a function which can be used to insert a message into the database

};
