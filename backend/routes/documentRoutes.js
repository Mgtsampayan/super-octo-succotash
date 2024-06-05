const express = require('express');
const { requestDocument, getStatus, getPendingRequests, processRequest } = require('../controllers/documentController');
const { verifyToken } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/request-document', verifyToken, requestDocument);
router.get('/status/:studentId', verifyToken, getStatus);
router.get('/pending-requests', verifyToken, getPendingRequests);
router.post('/process-request/:requestId', verifyToken, processRequest);

module.exports = router;
