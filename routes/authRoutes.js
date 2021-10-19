const express = require('express');
const router = express.Router();
const { riderSignup, riderActivateAccount, riderSignin, riderForgotPassword, riderResetPassword,riderSigninAuth, driverActivateAccount, driverSignin, driverSignup, driverSigninAuth } = require('../controllers/authController');



router.post('/ridersignup',riderSignup);

router.post('/ridersignin',riderSignin);

router.post("/signinRiderAuth",riderSigninAuth);

router.post('/driversignup',driverSignup);

router.post('/driversignin',driverSignin);

router.post("/signinDriverAuth",driverSigninAuth);

router.post('/auth/rider/activate/:token',riderActivateAccount);

router.post('/auth/driver/activate/:token',driverActivateAccount);

// router.post('/rider/forgot-password',riderForgotPassword);

// router.post('/auth/rider/reset/:resetPasswordLink', riderResetPassword);


module.exports = router;