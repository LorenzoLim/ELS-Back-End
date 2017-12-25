const { mongoose, db } = require('../database');
const Schema = mongoose.Schema;

const User = db.model('User', {
  name: String,
  email: String,
  password: String
});

module.exports = User;
