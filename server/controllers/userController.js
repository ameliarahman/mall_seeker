const User = require('../models/userModel');
const FBModel = require('../models/FBModel')


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
      res.status(200).send(newUser)
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