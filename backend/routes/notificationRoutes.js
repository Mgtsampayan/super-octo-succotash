const express = require('express');
const { getNotifications } = require('../controllers/notificationController');
const { verifyToken } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/notifications/:role', verifyToken, getNotifications);

module.exports = router;
