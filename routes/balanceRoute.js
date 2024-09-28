const express = require('express');
const { getBalance } = require('../controllers/balanceController');

const router = express.Router();

router.post('/balance', getBalance);

module.exports = router;
