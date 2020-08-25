const express = require('express');

const router = express.Router();
const riderDashboardRoutes = require('./riderdashboard.routes');


router.use('/riderdashboard',riderDashboardRoutes);




module.exports = router;