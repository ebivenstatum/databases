var models = require('../models');
var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept, authorization',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

module.exports = {
  get: function (req, res) {},
  post: function (req, res) {

    models.users.create(req.body["username"], (err,data) => {
      if (err) {
        res.writeHead(404, defaultCorsHeaders);
        res.end('Error! ' + JSON.stringify(data));
      } else {
        res.writeHead(201, defaultCorsHeaders);
        res.end('User Added');
      }

    });
  }
};
