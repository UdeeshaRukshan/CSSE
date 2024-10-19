const express = require('express')
const router = express.Router();
const {registerUser, loginUser, getMe , logoutUser,createDoctor,getDoctorById,createPrescription,createDiagnosis,
    createPatient,createAppointment,getPatientById} = require('../controllers/DoctorController');
const { get } = require('react-hook-form');
 
 


router.post('/', registerUser) // Register users

router.post('/login', loginUser) //Login users

 

router.post('/logout', logoutUser) //Logout users

router.post('/createdoctor',createDoctor)

router.get('/getdoctor/:id',getDoctorById)

router.post('/createprescription',createPrescription)

router.post('/creatediagnosis',createDiagnosis)

router.post('/createpatient',createPatient)

router.post('/createappointment',createAppointment)

router.get('/getpatient/:id',getPatientById)

module.exports = router