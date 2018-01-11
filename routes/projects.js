var express = require('express');
var router = express.Router();

/* GET projects listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Find projects by ID */
router.get('/projects/:id', (req, res) =>{
  Project.findById(req.params.id).then((project) =>{
    console.log(user);
    res.send(user);
  })
});

/* Returns all projects */
router.get('/projects', (req, res) => {
  User.find().then((project) =>{
    res.json(projects);
  });
});

/* Creates new project*/
router.post('/projects', (req, res) => {
  Project.create({
     projectNum: String,
     projectLocation: String,
     projectName: String,
     projectStatus: String
  }).then(() => {
    res.send('Success')
  })
});

/* Update data from database */
router.put('/projects/:id', function (req,res) {
  User.findOneAndUpdate(req.params.id, req.body).then((user) =>{
    res.send('Updated');
  });
});

/* Delete data from database */
router.delete('/projects/:id', function (req,res) {
  User.findByIdAndRemove(req.params.id).then((project) =>{
    res.send('Deleted');
  });
});

module.exports = router;