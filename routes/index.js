var express = require('express');
const User = require('../models/User');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Find user by ID */
router.get('/users/:id', (req, res) =>{
  User.findById(req.params.id).then((user) =>{
    console.log(user); 
    res.send(user);
  })
});

/* Returns all users */
router.get('/users', (req, res) => {
  User.find().then((users) =>{
    res.json(users);
  });
});

/* Creates new user*/
router.post('/users', (req, res) => {
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }).then(() => {
    res.send('Success')
  })
});

/* Update data from database */
router.put('/users/:id', function (req,res) {
  User.findOneAndUpdate(req.params.id, req.body).then((user) =>{
    res.send('Updated');
  });
});

/* Delete data from database */
router.delete('/users/:id', function (req,res) {
  User.findByIdAndRemove(req.params.id).then((user) =>{
    res.send('Deleted');
  });
});


  module.exports = router;
