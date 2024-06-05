require('events').EventEmitter.defaultMaxListeners = 20;

// const { emitter } = require('./config/emitter');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const studentRoutes = require('./routes/studentRoutes');
const registrarRoutes = require('./routes/registrarRoutes');
const accountingRoutes = require('./routes/accountingRoutes');
const facultyRoutes = require('./routes/facultyRoutes');
const { errorMiddleware } = require('./middlewares/errorMiddleware');

const authRoutes = require('./routes/authRoutes');
const documentRoutes = require('./routes/documentRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(errorMiddleware);

app.use('/api/students', studentRoutes);
app.use('/api/registrar', registrarRoutes);
app.use('/api/accounting', accountingRoutes);
app.use('/api/faculty', facultyRoutes);

app.use('/api/auth', authRoutes);
app.use('/api/documents', documentRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/payments', paymentRoutes);

module.exports = app;
