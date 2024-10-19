const express = require('express');
const {resetPassword, signup } = require('../controllers/AdminController');
const router = express.Router();

// router.post('/login', loginUser);
// router.get('/users', getAllUsers);
// router.get('/user/:id', getUserById);
// router.put('/user/:id', updateUser);
// router.delete('/user/:id', deleteUser);
router.post('/signup', signup);
router.post('/reset/:id', resetPassword);

module.exports = router;
