const express = require('express');
const { createRequest, getRequests } = require('../controllers/requestController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/create', authMiddleware, createRequest);
router.get('/', authMiddleware, getRequests);

module.exports = router;
