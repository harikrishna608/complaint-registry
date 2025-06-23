const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const transactionController = require('/controllers/transactionController');

router.post('/send', authMiddleware, transactionController.sendTransaction);

module.exports = router;
