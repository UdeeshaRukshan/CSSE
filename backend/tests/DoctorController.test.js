const { createDoctor } = require('../controllers/DoctorController');
const Doctor = require('../models/Doctor');

// Mocking Express request and response
const mockRequest = (body) => ({ body });
const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnThis();
    res.json = jest.fn();
    return res;
};

describe('Doctor Controller - createDoctor', () => {
    test('should create a doctor with valid data', async () => {
        jest.setTimeout(20000); // Increase timeout to 20 seconds
        const req = mockRequest({
            fullName: 'Dr. Smith',
            gender: 'male',
            email: 'dr.smith@example.com',
            yearsOfExperience: 10,
            specialization: 'Cardiology',
            licenseNumber: '123456',
            workplace: 'City Hospital'
        });
        const res = mockResponse();

        // Mock database query
        Doctor.findOne = jest.fn().mockResolvedValue(null); // No existing doctor
        Doctor.prototype.save = jest.fn().mockResolvedValue(req.body);

        await createDoctor(req, res);

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({
            message: 'Doctor created successfully.',
            data: expect.objectContaining({
                fullName: 'Dr. Smith',
                email: 'dr.smith@example.com'
            })
        });
    }, 20000);  // 20-second timeout for this test
});

