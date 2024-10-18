const express = require('express');
const router = express.Router();
const {
  createAppointment,
  getAppointments,
  getAppointmentById,
  deleteAppointment,
  cancelAppointment,
  getAppointmentsByUserId,
} = require('../controllers/AppointmentController');

// Routes for appointments
router.post('/', createAppointment);
router.get('/', getAppointments);
router.get('/:id', getAppointmentById);
router.delete('/:id', deleteAppointment);
router.patch('/cancel/:id', cancelAppointment);
// Update the user-specific route to avoid conflicts
router.get('/user/:userId', getAppointmentsByUserId);


module.exports = router;
