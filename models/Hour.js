const { mongoose, db } = require('../database');

const userSchema = new mongoose.Schema({
  type: String,
  total: Number,
  project_id: String,
  email: String
})

const Hour = mongoose.model('Hour', userSchema)

module.exports = Hour;
