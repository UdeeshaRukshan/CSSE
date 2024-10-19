const Appointment = require('../backend/models/AppointmentModel');
const AppointmentFactory = require('../backend/controllers/factory/AppointmentFactory');
const appointmentController = require('../backend/controllers/AppointmentController');
const loggerService = require('../backend/util/LoggerService');
const appointmentObserver = require('../backend/controllers/observers/AppointmentObserver');

jest.mock('../backend/models/AppointmentModel');
jest.mock('../backend/controllers/factory/AppointmentFactory');
jest.mock('../backend/util/LoggerService');
jest.mock('../backend/controllers/observers/AppointmentObserver');
jest.mock('../backend/util/AppointmentNotifications', () => ({
    sendNotificationEmail: jest.fn(),
}));

describe('Appointment Controller', () => {

    beforeEach(() => {
        jest.clearAllMocks(); 
    });

    describe('createAppointment', () => {
        it('should create a new appointment and return it', async () => {
          
            const req = {
                body: {
                    userId: 'user123',
                    patientId: 'patient123',
                    doctor: 'Dr. Smith',
                    schedule: '2023-10-19',
                    reason: 'Check-up',
                    status: 'scheduled',
                    note: 'Bring reports',
                    patientEmail: 'patient@example.com',
                },
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            const appointmentMock = {
                save: jest.fn().mockResolvedValue({ _id: 'appointment123' }),
            };
            AppointmentFactory.createAppointment.mockReturnValue(appointmentMock);

            // Act
            await appointmentController.createAppointment(req, res);

            // Assert
            expect(AppointmentFactory.createAppointment).toHaveBeenCalledWith(req.body);
            expect(appointmentMock.save).toHaveBeenCalled();
            expect(loggerService.info).toHaveBeenCalledWith('Appointment created successfully: appointment123');
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({ _id: 'appointment123' });
            expect(appointmentObserver.notify).toHaveBeenCalledWith({
                type: 'creation',
                patientEmail: 'patient@example.com',
                doctor: 'Dr. Smith',
                schedule: '2023-10-19',
            });
        });

        it('should return 500 if there is an error', async () => {
            // Arrange
            const req = {
                body: { userId: 'user123' },
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            AppointmentFactory.createAppointment.mockImplementation(() => {
                throw new Error('Test Error');
            });

            // Act
            await appointmentController.createAppointment(req, res);

            // Assert
            expect(loggerService.error).toHaveBeenCalledWith('Error creating appointment: Test Error');
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: 'Error creating appointment' });
        });
    });

    describe('getAppointments', () => {
        it('should fetch and return all appointments', async () => {
            // Arrange
            const req = {};
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            Appointment.find.mockResolvedValue([{ _id: 'appointment1' }, { _id: 'appointment2' }]);

            // Act
            await appointmentController.getAppointments(req, res);

            // Assert
            expect(Appointment.find).toHaveBeenCalled();
            expect(loggerService.info).toHaveBeenCalledWith('Fetched all appointments successfully.');
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith([{ _id: 'appointment1' }, { _id: 'appointment2' }]);
        });

        it('should return 500 if there is an error', async () => {
            // Arrange
            const req = {};
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            Appointment.find.mockRejectedValue(new Error('Test Error'));

            // Act
            await appointmentController.getAppointments(req, res);

            // Assert
            expect(loggerService.error).toHaveBeenCalledWith('Error fetching appointments: Test Error');
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: 'Error fetching appointments' });
        });
    });

    describe('getAppointmentById', () => {
        it('should return an appointment by id', async () => {
            // Arrange
            const req = { params: { id: 'appointment123' } };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            Appointment.findById.mockResolvedValue({ _id: 'appointment123' });

            // Act
            await appointmentController.getAppointmentById(req, res);

            // Assert
            expect(Appointment.findById).toHaveBeenCalledWith('appointment123');
            expect(loggerService.info).toHaveBeenCalledWith('Fetched appointment: appointment123');
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ _id: 'appointment123' });
        });

        it('should return 404 if appointment not found', async () => {
            // Arrange
            const req = { params: { id: 'appointment123' } };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            Appointment.findById.mockResolvedValue(null);

            // Act
            await appointmentController.getAppointmentById(req, res);

            // Assert
            expect(loggerService.warn).toHaveBeenCalledWith('Appointment not found for ID: appointment123');
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ message: 'Appointment not found' });
        });

        it('should return 500 if there is an error', async () => {
            // Arrange
            const req = { params: { id: 'appointment123' } };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            Appointment.findById.mockRejectedValue(new Error('Test Error'));

            // Act
            await appointmentController.getAppointmentById(req, res);

            // Assert
            expect(loggerService.error).toHaveBeenCalledWith('Error fetching appointment by ID: Test Error');
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: 'Error fetching appointment' });
        });
    });

   
});
