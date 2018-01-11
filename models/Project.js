const { mongoose, db } = require('../database');

const Project = mongoose.model('Project', {
	projectNum: String,
	projectLocation: String,
	projectName: String,
	projectStatus: String

});

module.exports = project;