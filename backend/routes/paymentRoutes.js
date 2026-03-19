const express = require('express');
const router = express.Router();
const { analyzePayment } = require('../controllers/paymentController');

// POST /api/payments/analyze
router.post('/analyze', analyzePayment);

module.exports = router;
