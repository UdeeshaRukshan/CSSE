const express = require('express');
const {findStaffByUsername} = require('../controllers/StaffController');

const router = express.Router();

router.get('/:username',findStaffByUsername);

module.exports = router;