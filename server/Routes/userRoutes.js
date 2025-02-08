const express = require('express');
const { registerUser, loginUser } = require('../Controller/userController');

const router = express.Router();

router.post ('/register-user',registerUser)
router.post('/login-user',loginUser)



module.exports = router;