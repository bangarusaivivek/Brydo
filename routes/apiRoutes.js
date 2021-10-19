const express = require('express');

const router = express.Router();
const riderDashboardRoutes = require('./riderdashboard.routes');
const authRoutes = require('./authRoutes');

router.use('/',authRoutes)

router.use('/riderdashboard',riderDashboardRoutes);




module.exports = router;