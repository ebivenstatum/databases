var models = require('../models');

module.exports = {
  get: function (req, res) {}, // a function which handles a get request for all messages
  post: function (req, res) {
  console.log('post hit!');
  res.end('under construction');
  } // a function which handles posting a message to the database
};
