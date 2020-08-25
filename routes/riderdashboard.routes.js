const express = require('express');
const router = express.Router();

const rentalRoutes = require('./rental.routes');

router.use('/rentals',rentalRoutes);



module.exports = router;