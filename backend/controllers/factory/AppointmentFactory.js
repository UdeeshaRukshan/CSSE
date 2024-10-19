const Appointment = require('../../models/AppointmentModel');

class AppointmentFactory {
  createAppointment(data) {
    return new Appointment(data);
  }
}

module.exports = new AppointmentFactory();
