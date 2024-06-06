const express = require('express');
const { getStudentProfile } = require('../controllers/studentController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/profile', authMiddleware, getStudentProfile);

module.exports = router;
