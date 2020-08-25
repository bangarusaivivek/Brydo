const express = require('express');
const router = express.Router();

const paymentRoute = require('./payment.routes');
const {doPayment} = require('../controllers/payments');

router.get('/booking/payment',doPayment);

module.exports = router;