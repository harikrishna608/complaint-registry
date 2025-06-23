const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const isAdmin = require('../middleware/isAdmin');
const adminController = require('../controllers/adminController');

// Protected admin routes
router.get('/users', auth, isAdmin, adminController.getAllUsers);
router.get('/complaints', auth, isAdmin, adminController.getAllComplaints);
router.get('/transactions', auth, isAdmin, adminController.getAllTransactions);

// If applicable
// router.get('/orders', auth, isAdmin, adminController.getAllOrders);

module.exports = router;
