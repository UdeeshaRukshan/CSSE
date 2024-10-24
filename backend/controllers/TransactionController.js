const Transaction = require('../models/TransactionModel');
const loggerService = require('../util/LoggerService');

// Create a new transaction
const createTransaction = async (req, res) => {
  const { type, status, amount, appointmentId } = req.body;

  try {
    const newTransaction = new Transaction({
      transactionId: uuidv4(), // Automatically generate a unique transaction ID
      type,
      status,
      amount,
      appointment: appointmentId,
    });

    const savedTransaction = await newTransaction.save();
    loggerService.info(`Transaction created successfully: ${savedTransaction.transactionId}`);
    return res.status(201).json(savedTransaction);
  } catch (error) {
    loggerService.error(`Error creating transaction: ${error.message}`);
    return res.status(500).json({ message: 'Error creating transaction', error: error.message });
  }
};

// Get all transactions
const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().populate('appointment');
    loggerService.info('Fetched all transactions successfully.');
    return res.status(200).json(transactions);
  } catch (error) {
    loggerService.error(`Error fetching transactions: ${error.message}`);
    return res.status(500).json({ message: 'Error fetching transactions', error: error.message });
  }
};

// Get a transaction by ID
const getTransactionById = async (req, res) => {
  const { id } = req.query;

  try {
    const transaction = await Transaction.findById(id);
    if (!transaction) {
      loggerService.warn(`Transaction not found for ID: ${id}`);
      return res.status(404).json({ message: 'Transaction not found' });
    }
    loggerService.info(`Fetched transaction: ${transaction.transactionId}`);
    return res.status(200).json(transaction);
  } catch (error) {
    loggerService.error(`Error fetching transaction by ID: ${error.message}`);
    return res.status(500).json({ message: 'Error fetching transaction by ID', error: error.message });
  }
};

// Update a transaction by ID
const updateTransaction = async (req, res) => {
  const { id } = req.params;
  const { type, status, amount, date } = req.body;

  try {
    const updatedTransaction = await Transaction.findByIdAndUpdate(
      id,
      { type, status, amount, date },
      { new: true, runValidators: true }
    );

    if (!updatedTransaction) {
      loggerService.warn(`Transaction not found for update: ${id}`);
      return res.status(404).json({ message: 'Transaction not found' });
    }

    loggerService.info(`Transaction updated successfully: ${updatedTransaction.transactionId}`);
    return res.status(200).json(updatedTransaction);
  } catch (error) {
    loggerService.error(`Error updating transaction: ${error.message}`);
    return res.status(500).json({ message: 'Error updating transaction', error: error.message });
  }
};

// Delete a transaction by ID
const deleteTransaction = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTransaction = await Transaction.findByIdAndDelete(id);

    if (!deletedTransaction) {
      loggerService.warn(`Transaction not found for deletion: ${id}`);
      return res.status(404).json({ message: 'Transaction not found' });
    }

    loggerService.info(`Transaction deleted successfully: ${deletedTransaction.transactionId}`);
    return res.status(200).json({ message: 'Transaction deleted successfully' });
  } catch (error) {
    loggerService.error(`Error deleting transaction: ${error.message}`);
    return res.status(500).json({ message: 'Error deleting transaction', error: error.message });
  }
};

// Get all transactions for a specific appointment
const getTransactionsByAppointmentId = async (req, res) => {
  const { appointmentId } = req.params;

  try {
    const transactions = await Transaction.find({ appointment: appointmentId });

    if (transactions.length === 0) {
      loggerService.warn(`No transactions found for appointmentId: ${appointmentId}`);
      return res.status(404).json({ message: 'No transactions found for this appointment' });
    }

    loggerService.info(`Fetched transactions for appointmentId: ${appointmentId}`);
    return res.status(200).json(transactions);
  } catch (error) {
    loggerService.error(`Error fetching transactions for appointmentId: ${appointmentId}, Error: ${error.message}`);
    return res.status(500).json({ message: 'Error fetching transactions for this appointment', error: error.message });
  }
};

module.exports = {
  createTransaction,
  getTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
  getTransactionsByAppointmentId,
};
