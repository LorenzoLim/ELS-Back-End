const { mongoose, db } = require('../database');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  role: String,
  totalHours: {type: Number, default: 0},
  hours: []
})

userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email', // Use email not username
  usernameLowerCase: true, // Treat emails as case-insensitive
  session: false // We'll use JWT
})

userSchema.pre("save",function(next) {
  if (this.hours.length == 0)
    this.hours.push({Project: 0});
    this.hours.push({bSup_bDev: 0});
    this.hours.push({bSup_commercial: 0});
    this.hours.push({bSup_equipmentOpt: 0});
    this.hours.push({bSup_maintenance: 0});
    this.hours.push({bSup_manufacturing: 0});
    this.hours.push({bSup_operations: 0});
    this.hours.push({bSup_techServices: 0});
    this.hours.push({bSup_zeroHarm: 0});
    this.hours.push({other_administration: 0});
    this.hours.push({other_attendingSite: 0});
    this.hours.push({other_audit: 0});
    this.hours.push({other_infoTech: 0});
    this.hours.push({other_leavePlanned: 0});
    this.hours.push({other_leaveUnPlanned: 0});
    this.hours.push({other_meetings: 0});
    this.hours.push({other_training: 0});
    this.hours.push({other_travel: 0});
  next();
});

const User = mongoose.model('User', userSchema)

module.exports = User;
