const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
require('dotenv').config()


function checkDatabase(req, res) {
  User.findOne({
    //find berdasarkan fbid
    fbid : req.headers.fbid
  })
  //kalo error, promise coba ganti callback
  .then(user => {
    //kalo user == kosong, bikin baru, kalo tidak kosong, lanjut bikinin token
    if (user === null) {
      let newUser = new User({
        // name :
        // profilePicture :
        // fbid :
      })
      newUser.save()
      .then(success => {
        //kalo ga di send, mungkin bikin jwt langsung di bawah
        res.send(success)
      })
    }
    jwt.sign({
      name : user.name,
      profilePicture : user.profilePicture,
      fbid : user.fbid
    },process.env.JWT_SECRET, (err, token) => {
      if (err) {
        console.log(err);
        res.status(500).send(err)
      }
      else {
        res.send(token)
      }
    })
  })
  .catch(err => {
    console.log(err);
    res.status(500).send(err)
  })
}

module.exports = {
  checkDatabase
};