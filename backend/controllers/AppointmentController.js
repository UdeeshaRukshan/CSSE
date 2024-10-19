const Appointment = require('../models/AppointmentModel');
const AppointmentFactory = require('../controllers/factory/AppointmentFactory');
const loggerService = require('../util/LoggerService');
const appointmentObserver = require('../controllers/observers/AppointmentObserver');
const { sendNotificationEmail } = require('../util/AppointmentNotifications');

// Function to send appointment notifications
const notifyAppointment = (type, data) => {
    const messages = {
        creation: `Your appointment with ${data.doctor} is scheduled for ${data.schedule}.`,
        cancellation: `Your appointment with ${data.doctor} scheduled for ${data.schedule} has been canceled.`,
    };

    sendNotificationEmail({
        patientEmail: data.patientEmail,
        subject: type === 'creation' ? 'Appointment Confirmation' : 'Appointment Canceled',
        message: messages[type],
    });
};

// Subscribe to appointment creation
appointmentObserver.subscribe((data) => {
    if (data.type === 'creation') {
        notifyAppointment('creation', data);
    }
});

// Subscribe to appointment cancellation
appointmentObserver.subscribe((data) => {
    if (data.type === 'cancellation') {
        notifyAppointment('cancellation', data);
    }
});

const createAppointment = async (req, res) => {
    const { userId, patientId, doctor, schedule, reason, status, note, patientEmail } = req.body;

    try {
        const newAppointment = AppointmentFactory.createAppointment({
            userId,
            patientId,
            doctor,
            schedule,
            reason,
            status,
            note,
        });

        const savedAppointment = await newAppointment.save();
        loggerService.info(`Appointment created successfully: ${savedAppointment._id}`);

        // Notify about appointment creation
        appointmentObserver.notify({
            type: 'creation', // Indicate the type of notification
            patientEmail,     // Ensure patientEmail is included in the data
            doctor,
            schedule,
        });

        return res.status(201).json(savedAppointment);
    } catch (error) {
        loggerService.error(`Error creating appointment: ${error.message}`);
        return res.status(500).json({ message: 'Error creating appointment' });
    }
};

// Fetch all appointments
const getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find({});
        loggerService.info('Fetched all appointments successfully.');
        return res.status(200).json(appointments);
    } catch (error) {
        loggerService.error(`Error fetching appointments: ${error.message}`);
        return res.status(500).json({ message: 'Error fetching appointments' });
    }
};

// Fetch an appointment by ID
const getAppointmentById = async (req, res) => {
    const { id } = req.params;

    try {
        const appointment = await Appointment.findById(id);

        if (!appointment) {
            loggerService.warn(`Appointment not found for ID: ${id}`);
            return res.status(404).json({ message: 'Appointment not found' });
        }

        loggerService.info(`Fetched appointment: ${appointment._id}`);
        return res.status(200).json(appointment);
    } catch (error) {
        loggerService.error(`Error fetching appointment by ID: ${error.message}`);
        return res.status(500).json({ message: 'Error fetching appointment' });
    }
};

// Delete an appointment
const deleteAppointment = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedAppointment = await Appointment.findByIdAndDelete(id);

        if (!deletedAppointment) {
            loggerService.warn(`Appointment not found for deletion: ${id}`);
            return res.status(404).json({ message: 'Appointment not found' });
        }

        loggerService.info(`Appointment deleted successfully: ${deletedAppointment._id}`);
        return res.status(200).json({ message: 'Appointment deleted successfully' });
    } catch (error) {
        loggerService.error(`Error deleting appointment: ${error.message}`);
        return res.status(500).json({ message: 'Error deleting appointment' });
    }
};

// Cancel an appointment
const cancelAppointment = async (req, res) => {
    const { id } = req.params;

    try {
        const appointment = await Appointment.findById(id);

        if (!appointment) {
            loggerService.warn(`Appointment not found for cancellation: ${id}`);
            return res.status(404).json({ message: 'Appointment not found' });
        }

        appointment.status = 'cancelled';
        await appointment.save();

        loggerService.info(`Appointment canceled successfully: ${appointment._id}`);

        // Notify about appointment cancellation
        appointmentObserver.notify({
            type: 'cancellation', // Indicate the type of notification
            patientEmail: appointment.patientEmail,
            doctor: appointment.doctor,
            schedule: appointment.schedule,
        });

        return res.status(200).json({ message: 'Appointment canceled successfully', appointment });
    } catch (error) {
        loggerService.error(`Error canceling appointment: ${error.message}`);
        return res.status(500).json({ message: 'Error canceling appointment' });
    }
};

const getAppointmentsByUserId = async (req, res) => {
    const { userId } = req.params;

    try {
        // Fetch all appointments related to the specific userId
        const appointments = await Appointment.find({ userId });

        if (appointments.length === 0) {
            loggerService.warn(`No appointments found for userId: ${userId}`);
            return res.status(404).json({ message: 'No appointments found for this user' });
        }

        loggerService.info(`Fetched appointments for userId: ${userId}`);
        return res.status(200).json(appointments);
    } catch (error) {
        loggerService.error(`Error fetching appointments for userId: ${userId}, Error: ${error.message}`);
        return res.status(500).json({ message: 'Error fetching appointments for this user' });
    }
};

// Export the functions using CommonJS
module.exports = {
    createAppointment,
    getAppointments,
    getAppointmentById,
    deleteAppointment,
    cancelAppointment,
    getAppointmentsByUserId
};
