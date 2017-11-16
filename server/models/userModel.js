const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
  name : String,
  profilePicture : String,
  fbid : String
})

let userModel = mongoose.model('User', userSchema)

module.exports = userModel;