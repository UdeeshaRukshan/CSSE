const { v4: uuidv4 } = require('uuid');
const Transaction = require('../../models/TransactionModel');

class TransactionFactory {
  createTransaction({ type, status, amount, appointmentId }) {
    return new Transaction({
      transactionId: uuidv4(), // Automatically generate a unique transaction ID
      type,
      transactionStatus: status,
      amount,
      appointment: appointmentId
    });
  }
}

module.exports = new TransactionFactory();
