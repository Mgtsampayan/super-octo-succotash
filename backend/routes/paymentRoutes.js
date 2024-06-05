const express = require('express');
const { verifyPayment } = require('../controllers/paymentController');
const { verifyToken } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/verify-payment', verifyToken, verifyPayment);

module.exports = router;
