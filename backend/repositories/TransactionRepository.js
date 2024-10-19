const Transaction = require('../models/TransactionModel');

class TransactionRepository {
  async saveTransaction(transaction) {
    return await transaction.save();
  }

  async getAllTransactions() {
    return await Transaction.find().populate('appointment');
  }

  async getTransactionById(id) {
    return await Transaction.findById(id).populate('appointment');
  }

  async updateTransactionById(id, updateData) {
    return await Transaction.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );
  }

  async deleteTransactionById(id) {
    return await Transaction.findByIdAndDelete(id);
  }

  async getTransactionsByAppointmentId(appointmentId) {
    return await Transaction.find({ appointment: appointmentId });
  }
}

module.exports = new TransactionRepository();
