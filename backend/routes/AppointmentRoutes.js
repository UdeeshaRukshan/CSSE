const express = require('express');
const router = express.Router();
const {
  createAppointment,
  getAppointments,
  getAppointmentById,
  deleteAppointment,
  cancelAppointment,
} = require('../controllers/AppointmentController');

// Routes for appointments
router.post('/', createAppointment);
router.get('/', getAppointments);
router.get('/:id', getAppointmentById);
router.delete('/:id', deleteAppointment);
router.patch('/cancel/:id', cancelAppointment); // Using PATCH for canceling

module.exports = router;
