const { mongoose, db } = require('../database');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  role: String,
  hours: [
    {travel: { type: Number, default: 0 }},
    {total: { type: Number, default: 0}},
  ]
})

userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email', // Use email not username
  usernameLowerCase: true, // Treat emails as case-insensitive
  session: false // We'll use JWT
})

const User = mongoose.model('User', userSchema)

module.exports = User;
