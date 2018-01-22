var express = require('express');
var csv = require('express-csv');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Get CSV Data */
router.get('/csv',(req, res) => {
  res.csv([
    ["a", "b", "c"],
    ["d", "e", "f"]
  ]);
});

module.exports = router;
