const { mongoose, db } = require('../database');

const User = mongoose.model('User', {
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  role: ''
});

module.exports = User;
