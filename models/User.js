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
    this.hours.push({type: 'Project', total: 0});
    this.hours.push({type: 'bSup_bDev', total: 0});
    this.hours.push({type: 'bSup_commercial', total: 0});
    this.hours.push({type: 'bSup_equipmentOpt', total: 0});
    this.hours.push({type: 'bSup_maintenance', total: 0});
    this.hours.push({type: 'bSup_manufacturing', total: 0});
    this.hours.push({type: 'bSup_operations', total: 0});
    this.hours.push({type: 'bSup_techServices', total: 0});
    this.hours.push({type: 'bSup_zeroHarm', total: 0});
    this.hours.push({type: 'other_administration', total: 0});
    this.hours.push({type: 'other_attendingSite', total: 0});
    this.hours.push({type: 'other_audit', total: 0});
    this.hours.push({type: 'other_infoTech', total: 0});
    this.hours.push({type: 'other_leavePlanned', total: 0});
    this.hours.push({type: 'other_leaveUnPlanned', total: 0});
    this.hours.push({type: 'other_meetings', total: 0});
    this.hours.push({type: 'other_training', total: 0});
    this.hours.push({type: 'other_travel', total: 0});
  next();
});

const User = mongoose.model('User', userSchema)

module.exports = User;
