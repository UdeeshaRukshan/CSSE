const patientController = require('../backend/controllers/PatientController');
const Patient = require('../backend/models/PatientModel'); 
const httpMocks = require('node-mocks-http');
const mongoose = require('mongoose');

// Mock the Patient model
jest.mock('../backend/models/PatientModel');

describe('Patient Controller', () => {

    describe('registerPatient', () => {
        it('should register a patient successfully', async () => {
            const req = httpMocks.createRequest({
                body: {
                    userId: '123',
                    name: 'John Doe',
                    email: 'john@example.com',
                    phone: '123456789',
                    birthDate: '1990-01-01',
                    gender: 'male',
                    address: '123 Main St',
                    occupation: 'Engineer',
                    emergencyContactName: 'Jane Doe',
                    emergencyContactNumber: '987654321',
                    primaryPhysician: 'Dr. Smith',
                    insuranceProvider: 'ABC Insurance',
                    insurancePolicyNumber: 'INS12345',
                    allergies: ['Peanuts'],
                    currentMedication: ['Aspirin'],
                    familyMedicalHistory: ['Diabetes'],
                    pastMedicalHistory: ['Asthma'],
                    identificationType: 'Passport',
                    identificationNumber: 'A1234567',
                    privacyConsent: true,
                }
            });
            const res = httpMocks.createResponse();
            
            Patient.prototype.save = jest.fn().mockResolvedValue(req.body); // Mock save

            await patientController.registerPatient(req, res);

            expect(res.statusCode).toBe(201);
            expect(res._getJSONData()).toEqual({
                message: 'Patient registered successfully',
                patient: req.body,
            });
        });

        it('should handle error while registering a patient', async () => {
            const req = httpMocks.createRequest({
                body: {
                    userId: '123',
                    name: 'John Doe',
                }
            });
            const res = httpMocks.createResponse();

            Patient.prototype.save = jest.fn().mockRejectedValue(new Error('Database error')); // Mock save error

            await patientController.registerPatient(req, res);

            expect(res.statusCode).toBe(500);
            expect(res._getJSONData()).toEqual({
                message: 'Error registering patient',
                error: 'Database error',
            });
        });
    });

    describe('findPatientById', () => {
        it('should find a patient by userId', async () => {
            const req = httpMocks.createRequest({ params: { userId: '123' } });
            const res = httpMocks.createResponse();

            Patient.findOne = jest.fn().mockResolvedValue({ userId: '123', name: 'John Doe' }); // Mock findOne

            await patientController.findPatientById(req, res);

            expect(res.statusCode).toBe(200);
            expect(res._getJSONData()).toEqual({
                message: 'Patient found successfully',
                patient: { userId: '123', name: 'John Doe' },
            });
        });

        it('should return 404 if patient is not found', async () => {
            const req = httpMocks.createRequest({ params: { userId: '123' } });
            const res = httpMocks.createResponse();

            Patient.findOne = jest.fn().mockResolvedValue(null); // Mock no result

            await patientController.findPatientById(req, res);

            expect(res.statusCode).toBe(404);
            expect(res._getJSONData()).toEqual({ message: 'Patient not found' });
        });

        it('should return 400 for invalid userId format', async () => {
            const req = httpMocks.createRequest({ params: { userId: '' } });
            const res = httpMocks.createResponse();

            await patientController.findPatientById(req, res);

            expect(res.statusCode).toBe(400);
            expect(res._getJSONData()).toEqual({ message: 'Invalid userId format' });
        });
    });

    describe('findAllPatients', () => {
        it('should retrieve all patients successfully', async () => {
            const req = httpMocks.createRequest();
            const res = httpMocks.createResponse();

            Patient.find = jest.fn().mockResolvedValue([{ userId: '123', name: 'John Doe' }]); // Mock find

            await patientController.findAllPatients(req, res);

            expect(res.statusCode).toBe(200);
            expect(res._getJSONData()).toEqual({
                message: 'Patients retrieved successfully',
                patients: [{ userId: '123', name: 'John Doe' }],
            });
        });

        it('should return 404 if no patients are found', async () => {
            const req = httpMocks.createRequest();
            const res = httpMocks.createResponse();

            Patient.find = jest.fn().mockResolvedValue([]); // Mock empty find

            await patientController.findAllPatients(req, res);

            expect(res.statusCode).toBe(404);
            expect(res._getJSONData()).toEqual({ message: 'No patients found' });
        });
    });
});
