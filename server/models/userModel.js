const mongoose = require('mongoose');
const Schema = mongoose.Schema

let userSchema = new Schema({
  name: String,
  fbid: String
})

let userModel = mongoose.model('User', userSchema)

module.exports = userModel;