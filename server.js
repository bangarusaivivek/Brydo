const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const app = express();

const connectDB = require('./config/db');
dotenv.config({ path: './config/.env' })
const apiRoutes = require('./routes/apiRoutes');

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());

if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use('/',apiRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

