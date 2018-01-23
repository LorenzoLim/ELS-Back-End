var express = require('express');
var csv = require('express-csv');
const Project = require('../models/Project');
const User = require('../models/User');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Get CSV Data */
router.get('/report.csv',(req, res) => {
  const flatUsers = []
  Promise.all([
    User.find(),
    Project.find()
  ]).then(([users, projects]) => {
    projects.forEach((project) => {
      users.forEach((user) => {
          let counter = 0;
          user.hours.forEach((hour) => {
            const result = {
              firstName: user.firstName,
              lastName: user.lastName,
              type: hour.type,
              project: project.projectName,
              total: hour.total
            }
            flatUsers.push(result)
          })
      })
    })
    res.csv(flatUsers);
  })
});

module.exports = router;
