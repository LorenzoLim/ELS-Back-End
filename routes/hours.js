var express = require('express');
const User = require('../models/User');
var router = express.Router();

router.get('/', (req, res) => {
  User.find().then((users) =>{
    res.json(users[6].hours);
  });
});

// router.post('/', (req, res) => {
//   User.find().then((users) =>{
//     res.json(users[0].hours);
//   });
// });

module.exports = router;
