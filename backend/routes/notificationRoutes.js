const express = require('express');
const { getNotifications } = require('../controllers/notificationController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/notifications/:role', authMiddleware, getNotifications);

module.exports = router;