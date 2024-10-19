const express = require('express');
const {findStaffByUsername} = require('../controllers/StaffController');
const {registerStaff} = require('../controllers/StaffController');
const {loginStaff} = require('../controllers/StaffController');

const router = express.Router();

router.get('/:username',findStaffByUsername);
router.post('/register',registerStaff);
router.post('/login/:username/:password', loginStaff);


module.exports = router;