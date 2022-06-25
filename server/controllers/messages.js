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
     try{
      var result = await models.messages.Message.findAll();
      res.send(JSON.stringify(result));
    } catch(err) {
      console.log(err);
      res.sendStatus(404);
    }


      /*(err, data) => {
      if (err) {
        res.writeHead(404, defaultCorsHeaders);
        res.end('Error!');
      } else {
        res.writeHead(201, defaultCorsHeaders);
        res.end(JSON.stringify(data));
      }

    });*/


  }, // a function which handles a get request for all messages
  post: async function (req, res) {

    //var message = req.body;
    try {
      var result = await models.messages.Message.create(req.body);
      res.sendStatus(200);
    } catch(err) {
      console.log(err);
      res.sendStatus(404);
    }
      /*["message"], req.body["username"], req.body["roomname"], (err, data) => {

      if (err) {
        res.writeHead(404, defaultCorsHeaders);
        res.end('Error!');
      } else {
        res.writeHead(201, defaultCorsHeaders);
        res.end('Posted');
      }


    });*/

  } // a function which handles posting a message to the database
};
