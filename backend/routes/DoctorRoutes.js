const express = require('express');

const {registerDoctor} = require("../controllers/DoctorController");
const {getAllDoctors} = require("../controllers/DoctorController");

const router = express.Router();

router.post('/register',registerDoctor);
router.get('/all',getAllDoctors);

module.exports = router;