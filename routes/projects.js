const express = require('express');
const Project = require('../models/Project');
const router = express.Router();

/* Returns all projects */
router.get('/', (req, res) => {
  Project.find().populate('projectUsers').then((project) =>{
    res.json(project);
  });
});

/* Find projects by ID */
router.get('/:id', (req, res) =>{
  Project.findById(req.params.id).populate('projectUsers').then((project) =>{
    console.log(project);
    res.send(project);
  })
});

/* Creates new project*/
router.post('/', (req, res) => {
  Project.create({
     projectNum: req.body.projectNum,
     projectLocation: req.body.projectLocation,
     projectName: req.body.projectName,
     projectStatus: req.body.projectStatus,
     projectUsers: req.body.projectUsers
  }).then((project) => {
    res.send(project)
  })
});

/* Update data from database */
router.put('/:id', function (req,res) {
  Project.findOneAndUpdate(req.params.id, req.body).then((project) =>{
    res.send(project);
  });
});

/* Delete data from database */
router.delete('/:id', function (req,res) {
  Project.findByIdAndRemove(req.params.id).then((project) =>{
    res.send('Deleted');
  });
});

module.exports = router;
