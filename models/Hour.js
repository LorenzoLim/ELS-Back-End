const { mongoose, db } = require('../database');

const Hour = mongoose.model('Hour', {
	type: String,
  hours: Number,
  user_id: String
});

module.exports = Hour;
