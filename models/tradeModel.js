const mongoose = require('mongoose');

const tradeSchema = new mongoose.Schema({
  utc_time: { type: Date, required: true },
  operation: { type: String, enum: ['BUY', 'SELL'], required: true },
  market: { type: String, required: true }, // e.g., BTC/USD
  amount: { type: Number, required: true }, // Base coin amount
  price: { type: Number, required: true },  // Price per base coin
});

module.exports = mongoose.model('Trade', tradeSchema);
