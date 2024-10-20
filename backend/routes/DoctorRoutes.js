const express = require('express');

const {registerDoctor} = require("../controllers/DoctorController");
const {getAllDoctors,deleteDoctorByUsername} = require("../controllers/DoctorController");


const router = express.Router();

router.post('/register',registerDoctor);
router.get('/all',getAllDoctors);
router.delete('/username/:fullname', deleteDoctorByUsername);

module.exports = router;