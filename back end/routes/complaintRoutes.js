const express = require('express');
const router = express.Router();
const complaintController = require('../controllers/complaintController');
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, complaintController.submitComplaint);
router.get('/my', authMiddleware, complaintController.getMyComplaints);

module.exports = router;
