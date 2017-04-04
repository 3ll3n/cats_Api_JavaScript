var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/', function (req, res) {
  res.json("hi");
});

router.get('/cats/:name', function (req, res) {
   
});

module.exports = router;