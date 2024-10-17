// routes/appointmentRoutes.js
const express = require('express');
const { createAppointment, getAppointments,getAppointmentById }= require( '../controllers/AppointmentController');

const router = express.Router();

router.post('/', createAppointment);
router.get('/', getAppointments);
router.get('/:id', getAppointmentById);


module.exports = router;
