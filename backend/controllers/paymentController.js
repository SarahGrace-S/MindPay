const Payment = require('../models/Payment');

// Analyze payment, save to DB, and return a decision message
exports.analyzePayment = async (req, res, next) => {
  try {
    const { amount, purpose, category } = req.body;

    // Basic validation
    if (amount == null || isNaN(amount) || Number(amount) < 0) {
      return res.status(400).json({ error: 'Invalid amount' });
    }
    if (!purpose || typeof purpose !== 'string') {
      return res.status(400).json({ error: 'Purpose is required' });
    }
    const allowed = ['Essential', 'Non-Essential', 'Emergency'];
    if (!category || !allowed.includes(category)) {
      return res.status(400).json({ error: 'Invalid category' });
    }

    // Determine message based on category
    let message = '';
    if (category === 'Essential') message = 'Payment Approved';
    else if (category === 'Non-Essential') message = 'Think before spending';
    else if (category === 'Emergency') message = 'Emergency Payment Allowed';

    // Save to DB
    const payment = new Payment({ amount: Number(amount), purpose, category });
    await payment.save();

    return res.status(200).json({ message, payment });
  } catch (err) {
    next(err);
  }
};
