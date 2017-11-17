require('dotenv').config()
const User = require('../models/userModel');
const FBModel = require('../models/FBModel')
const jwt = require('jsonwebtoken')
const key = process.env.JWT_SECRET


const addingUser = (req, res) => {
  FBModel.getData(req.headers.token)
  .then( data => {
    console.log('ini datanya ', data);
    let user = new User({
      fbid: data.id,
      name: data.name,
      email: data.email
    })
    user.save()
    .then(newUser => {
      var accessToken = jwt.sign({
        _id: newUser._id,
        fbid: newUser.fbid,
        name: newUser.name,
        email: newUser.email
      }, key)
      console.log('data lemparan ', accessToken);
      res.status(200).send(accessToken)
    })
  })
  .catch(err => {
    console.log('ini errornya ', err);
    res.status(500).send(err)
  })
}

module.exports = {
  addingUser
};