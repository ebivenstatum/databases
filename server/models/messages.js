//var dbPath = require('../db').dbConnection;
const mysql = require('mysql2');

var Sequelize = require('sequelize');

var db = new Sequelize('chat', 'root', '', {
  host: 'localhost:3000',
  dialect: 'mysql'
});

var User = db.define('User', {
  user_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: Sequelize.STRING
});

var Message = db.define('Message', {
  message_id: {
    type: Sequelize.INTEGER,  autoIncrement: true,
    primaryKey: true
},
  username: Sequelize.STRING,
  userid: Sequelize.INTEGER,
  input: Sequelize.STRING,
  roomname: Sequelize.STRING
});

module.exports = {
  getAll: function (req, callback) {
    let queryString = 'SELECT * FROM messages';

    db.query(queryString, (err, data) => {
      if (err) {
        callback(err, data);
      } else {
        callback(null, data);
      }

    });

  }, // a function which produces all the messages
  create: function (message, username, roomname, callback) {

    // FINDING OBJECT AND NOT A NUMBER
    //var userID = db.query(`SELECT id FROM users WHERE username = "${username}"`);

    //let queryString = `INSERT INTO messages (username, input, roomname) VALUES ("${username}", "${message}", "${roomname}")`;

    Message.sync()
      .then(function() {
        Message.create({username: username,
        input: message,
      roomname: roomname});
      callback(null, "db: success");
      })
      .catch(function(err) {
        // Handle any error in the chain
        callback(err);
        db.close();
      });

    /*db.query(queryString, (err, data) => {
      if (err) {
        callback(err, data);
      } else {
        callback(null, "db: success");
      }

    });*/

  } // a function which can be used to insert a message into the database

};
