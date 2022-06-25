var db = require('../db').dbConnection;
const mysql = require('mysql2');

var Sequelize = require('sequelize');

var db = new Sequelize('chat', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

var User = db.define('User', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: Sequelize.STRING
});

var Message = db.define('Message', {
  message_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
},
  username: Sequelize.STRING,
  user_id: {
    type: Sequelize.INTEGER,
    foreignKey: true
    },
  input: Sequelize.STRING,
  roomname: Sequelize.STRING,
  room_id: Sequelize.INTEGER,
});

module.exports = {
  User: User,
  /*getAll: function (req, callback) {
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

  }*/
};
