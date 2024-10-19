const express = require('express');

const {registerOtherStaff} = require("../controllers/OtherStaffController");
const {getAllOtherStaff} = require("../controllers/OtherStaffController");

const router = express.Router();

router.post('/register',registerOtherStaff);
router.get('/all',getAllOtherStaff);

module.exports = router;