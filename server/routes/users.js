var express = require('express');
var router = express.Router();
const User = require('../controllers/userController')

router.post('/', User.getLocation)
router.post('/', User.addingUser)

module.exports = router;
