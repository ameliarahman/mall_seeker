var express = require('express');
var router = express.Router();
const User = require('../controllers/userController')

router.post('/', User.addingUser)

module.exports = router;
