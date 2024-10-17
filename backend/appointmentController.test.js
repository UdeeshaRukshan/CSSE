const { createAppointment, cancelAppointment } = require('../backend/controllers/AppointmentController');
const { sendNotificationEmail } = require('../backend/util/AppointmentNotifications');
const Appointment = require('../backend/models/AppointmentModel');

// Mock the sendNotificationEmail function
jest.mock('../backend/util/AppointmentNotifications', () => ({
  sendNotificationEmail: jest.fn(),
}));

// Mock the Appointment model
jest.mock('../backend/models/AppointmentModel', () => ({
  create: jest.fn(),
  findById: jest.fn(),
  findByIdAndDelete: jest.fn(),
}));

describe('Appointment Controller Tests', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  it('should send notification email on appointment creation', async () => {
    const req = {
      body: {
        userId: '123',
        patientId: '456',
        doctor: 'Dr. Smith',
        schedule: '2024-10-30',
        reason: 'Checkup',
        status: 'scheduled',
        note: 'First visit',
        patientEmail: 'udeeshagamage12@gmail.com',
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // Mock the create method to resolve with a created appointment
    Appointment.create.mockResolvedValue(req.body); // Mock appointment creation

    // Call the function
    await createAppointment(req, res);

    // Check if the email sending function was called
    expect(sendNotificationEmail).toHaveBeenCalledWith({
      patientEmail: 'udeeshagamage12@gmail.com',
      subject: 'Appointment Confirmation',
      message: expect.stringContaining('Your appointment with Dr. Smith is scheduled for 2024-10-30.'),
    });
  });

  it('should send notification email on appointment cancellation', async () => {
    const req = { params: { id: 'appointment-id' } };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // Mock the findById method to return a fake appointment
    Appointment.findById.mockResolvedValue({
      patientEmail: 'patient@example.com',
      doctor: 'Dr. Smith',
      schedule: '2024-10-30',
      status: 'scheduled',
      save: jest.fn(), // Mock save method for the appointment
    });

    await cancelAppointment(req, res);

    expect(sendNotificationEmail).toHaveBeenCalledWith({
      patientEmail: 'patient@example.com',
      subject: 'Appointment Canceled',
      message: expect.stringContaining('Your appointment with Dr. Smith scheduled for 2024-10-30 has been canceled.'),
    });
  });
});
