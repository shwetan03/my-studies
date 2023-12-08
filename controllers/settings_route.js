const express = require('express');
const router = express.Router();
var fs = require('fs');
const { body,validationResult } = require('express-validator');
const connectEnsureLogin = require('connect-ensure-login');


router.get('/', function(req, res) {
  fs.readFile('./views/settings.ejs', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
  });
});

module.exports = router;