const express = require('express');
const {resetPassword, signup } = require('../controllers/AdminController');
const { getTransactions, getTransactionById, updateTransaction, deleteTransaction } = require('../controllers/TransactionController');
const router = express.Router();

// router.post('/login', loginUser);
// router.get('/', getTransactions);
router.get('/', getTransactionById);
router.put('/:id', updateTransaction);
router.delete('/:id', deleteTransaction);
// router.post('/signup', signup);
// router.post('/reset/:id', resetPassword);

module.exports = router;
