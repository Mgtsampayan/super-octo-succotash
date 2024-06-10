// Create a requestModel.js using mysql

const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoutes');
const requestRoutes = require('./routes/requestRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

app.use('/api/students', studentRoutes);

app.use('/api/requests', requestRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});