const express = require('express');
const { createUser , loginUser} = require('../controller/Auth');
// const passport = require('passport');

const router = express.Router();
//  /auth is already added in base path
router.post('/signup', createUser)
.post('/login', loginUser)
// .get('/check',passport.authenticate('jwt'), checkAuth)
// .get('/logout', logout)
// .post('/reset-password-request', resetPasswordRequest)
// .post('/reset-password', resetPassword)
exports.router = router;