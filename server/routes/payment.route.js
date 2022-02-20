const express = require('express');
const controller = require('../controllers/payment.controller');
const router = express.Router();

router.get('/', controller.getPayment);

module.exports = router;
