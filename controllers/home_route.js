const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('../views/home.ejs');
});

module.exports = router;

module.exports = router;