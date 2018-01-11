var express = require('express');
const User = require('../models/User');
var router = express.Router();

/* Find user by ID */
router.get('/:id', (req, res) =>{
  User.findById(req.params.id).then((user) =>{
    console.log(user);
    res.send(user);
  })
});

/* Returns all users */
router.get('/', (req, res) => {
  User.find().then((users) =>{
    res.json(users);
  });
});

/* Creates new user*/
router.post('/', (req, res) => {
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role
  }).then(() => {
    res.send('Success')
  })
});

/* Update data from database */
router.put('/:id', function (req,res) {
  User.findOneAndUpdate(req.params.id, req.body).then((user) =>{
    res.send('Updated');
  });
});

/* Delete data from database */
router.delete('/:id', function (req,res) {
  User.findByIdAndRemove(req.params.id).then((user) =>{
    res.send('Deleted');
  });
});

module.exports = router;
