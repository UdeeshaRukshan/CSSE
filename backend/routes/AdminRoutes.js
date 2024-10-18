const express = require('express');
const { loginUser, getAllUsers, getUserById, updateUser, deleteUser, resetPassword } = require('../controllers/userController');
const router = express.Router();

router.post('/login', loginUser);
router.get('/users', getAllUsers);
router.get('/user/:id', getUserById);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);
router.post('/reset-password', resetPassword);

module.exports = router;
