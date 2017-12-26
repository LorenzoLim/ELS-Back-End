const mongoose = require('mongoose');
const db = mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds163836.mlab.com:63836/easy-log-system`, {useMongoClient:true});
mongoose.Promise = Promise

module.exports = { mongoose, db }
