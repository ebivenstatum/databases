var models = require('../models');
var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept, authorization',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

module.exports = {

  get: function (req, res) {

  }, // a function which handles a get request for all messages
  post: function (req, res) {

    //var message = req.body;
    models.messages.create(req.body["message"], req.body["username"], req.body["roomname"], (err, data) => {

      if (err) {
        res.writeHead(404, defaultCorsHeaders);
        res.end('Error!' + JSON.stringify(data));
      } else {
        res.writeHead(201, defaultCorsHeaders);
        res.end('Posted');
      }


    });

  } // a function which handles posting a message to the database
};
