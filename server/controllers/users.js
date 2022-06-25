var models = require('../models');
/*var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept, authorization',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};*/

module.exports = {
  get: async function (req, res) {

    try {
      var result = await models.users.User.findAll();
      res.send(JSON.stringify(result));
    } catch(err) {
      console.log(err);
      res.sendStatus(404);
    }

    /*models.users.getAll(req.body, (err, data) => {
      if (err) {
        res.writeHead(404, defaultCorsHeaders);
        res.end('Error!');
      } else {
        res.writeHead(201, defaultCorsHeaders);
        res.end(JSON.stringify(data));
      }

    });*/

  },
  post: async function (req, res) {

    try {
      var result = await models.users.User.create(req.body);
      res.sendStatus(200)
    } catch(err) {
      console.log(err);
      res.sendStatus(404);
    }

    /*models.users.create(req.body["username"], (err,data) => {
      if (err) {
        res.writeHead(404, defaultCorsHeaders);
        res.end('Error!');
      } else {
        res.writeHead(201, defaultCorsHeaders);
        res.end('User Added');
      }

    });*/
  }
};
