var express = require('express');
var router = express.Router();
const User = require('../controllers/userController')

/* GET users listing. */
// router.get('/', User.getAllUser)
router.post('/', User.addingUser)

module.exports = router;
