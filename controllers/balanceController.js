const Trade = require('../models/tradeModel');
const { parseTimestamp } = require('../utils/parseTimestamp');

const getBalance = async (req, res) => {
  const { timestamp } = req.body;

  try {
    const endTime = parseTimestamp(timestamp);

    // Get all trades up to the provided timestamp
    const trades = await Trade.find({ utc_time: { $lte: endTime } });

    const balances = {};

    trades.forEach((trade) => {
      const [baseCoin] = trade.market.split('/');
      if (!balances[baseCoin]) {
        balances[baseCoin] = 0;
      }

      // Adjust balance based on buy or sell operation
      if (trade.operation === 'BUY') {
        balances[baseCoin] += trade.amount;
      } else if (trade.operation === 'SELL') {
        balances[baseCoin] -= trade.amount;
      }
    });

    res.status(200).json(balances);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Invalid request' });
  }
};

module.exports = { getBalance };
