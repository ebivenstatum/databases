var models = require('../models');

module.exports = {
  get: function (req, res) {}, // a function which handles a get request for all messages
  post: function (req, res) {

    var message = req.body;
    models.messages.create(message,  (err) => {
      if (err) {
        res.end('Error!')
      } else {
        res.end('Posted');
      }


    });

  } // a function which handles posting a message to the database
};
