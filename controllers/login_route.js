const express = require('express');
const router = express.Router();
var fs = require('fs');


router.get('/', function(req, res) {
  fs.readFile('./views/login.ejs', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
  });
});

module.exports = router;