// models/Transaction.js
const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  transactionId: {
    type: String,
    required: true,
    unique: true, // Ensure uniqueness
  },
  type: {
    type: String,
    enum: ['debit', 'credit'], // Transaction type could be debit or credit
    required: true,
  },
  transactionStatus: {
    type: String,
    enum: ['pending', 'completed', 'failed'], // Example statuses
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now, // Default to current date
  },
  appointment: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Appointment',
    // required: true, // This transaction is always linked to an appointment
  }
}, { timestamps: true });

const Transaction = mongoose.model('Transaction', TransactionSchema);
module.exports = Transaction;
