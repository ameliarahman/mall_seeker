const User = require('../models/userModel');
require('dotenv').config()



// function checkDatabase(req, res) {
//   User.findOne({
//     //find berdasarkan fbid
//     fbid : req.headers.fbid
//   })
//   //kalo error, promise coba ganti callback
//   .then(user => {
//     //kalo user == kosong, bikin baru, kalo tidak kosong, lanjut bikinin token
//     if (user === null) {
//       let newUser = new User({
//         // name :
//         // profilePicture :
//         // fbid :
//       })
//       newUser.save()
//       .then(success => {
//         //kalo ga di send, mungkin bikin jwt langsung di bawah
//         res.send(success)
//       })
//     }
//     jwt.sign({
//       name : user.name,
//       profilePicture : user.profilePicture,
//       fbid : user.fbid
//     },process.env.JWT_SECRET, (err, token) => {
//       if (err) {
//         console.log(err);
//         res.status(500).send(err)
//       }
//       else {
//         res.send(token)
//       }
//     })
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).send(err)
//   })
// }

const addingUser = (req, res) => {
  let user = new User(req.body)
  user.save()
  .then(response => {
    res.status(200).send(response)
  })
  .catch(err=> {
    res.status(500).send(err)
  })
}

module.exports = {
  addingUser
};