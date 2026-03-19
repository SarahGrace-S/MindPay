const mongoose = require('mongoose');

// Payment schema: amount, purpose, category, createdAt
const paymentSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  purpose: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    enum: ['Essential', 'Non-Essential', 'Emergency'],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Payment', paymentSchema);
