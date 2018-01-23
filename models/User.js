const { mongoose, db } = require('../database');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  role: String
})

userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email', // Use email not username
  usernameLowerCase: true, // Treat emails as case-insensitive
  session: false // We'll use JWT
})

// userSchema.pre("save",function(next) {
//   if (this.hours.length == 0)
//     this.hours.push({type: 'Project', total: 0});
//     this.hours.push({type: 'Business Support - Business Development', total: {type: Number, default: 0}});
//     this.hours.push({type: 'Business Support - Commercial', total: {type: Number, default: 0}});
//     this.hours.push({type: 'Business Support - Equipment Optimization', total: {type: Number, default: 0}});
//     this.hours.push({type: 'Business Support - Maintenance', total: {type: Number, default: 0}});
//     this.hours.push({type: 'Business Support - Manufacturing', total: {type: Number, default: 0}});
//     this.hours.push({type: 'Business Support - Operations', total: {type: Number, default: 0}});
//     this.hours.push({type: 'Business Support - Technical Services', total: {type: Number, default: 0}});
//     this.hours.push({type: 'Business Support - Zero Harm', total: {type: Number, default: 0}});
//     this.hours.push({type: 'Other - Administration', total: {type: Number, default: 0}});
//     this.hours.push({type: 'Other - Attending Site', total: {type: Number, default: 0}});
//     this.hours.push({type: 'Other - Audit', total: {type: Number, default: 0}});
//     this.hours.push({type: 'Other - Information Technology', total: {type: Number, default: 0}});
//     this.hours.push({type: 'Other - Leave-Planned (A/L, Public, Holiday)', total: {type: Number, default: 0}});
//     this.hours.push({type: 'Other - Leave-Unplanned(Sick, Family Leave)', total: {type: Number, default: 0}});
//     this.hours.push({type: 'Other - Meetings', total: {type: Number, default: 0}});
//     this.hours.push({type: 'Other - Training', total: {type: Number, default: 0}});
//     this.hours.push({type: 'Other - Travel', total: {type: Number, default: 0}});
//   next();
// });

const User = mongoose.model('User', userSchema)

module.exports = User;
