const mongoose = require('mongoose');
const Schema = mongoose.Schema

let userSchema = new Schema({
  fbid: {
    type:String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
})

let userModel = mongoose.model('User', userSchema)

module.exports = userModel;