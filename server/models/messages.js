var db = require('../db').dbConnection;
const mysql = require('mysql2');

module.exports = {
  getAll: function () {}, // a function which produces all the messages
  create: function (message, callback) {

    //db.query('insert into users (id, username) values (1, "llll")'); // for testing purposes
    //db.query('insert into rooms (id, roomname) values (1, "New Room")'); // for testing purposes

    var userId = db.query(`SELECT id FROM users WHERE username = "${message.username}"`);
    var roomId = db.query(`SELECT id FROM rooms WHERE roomname = "${message.roomname}"`);

    let queryString = `insert into messages (text, user_id, room_id) values (${message.message}, ${userId}, ${roomId})`;
    let queryArgs = [];

    db.query(queryString, queryArgs, (err) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }

    });

  } // a function which can be used to insert a message into the database

};
