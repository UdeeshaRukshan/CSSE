const User = require('../backend/models/UserModel');
const bcrypt = require('bcryptjs');
const userController = require('../backend/controllers/UserController');
const loggerService = require('../backend/util/LoggerService');
const { sendNotificationEmail } = require('../backend/util/AppointmentNotifications');
const jwt = require('jsonwebtoken');
jest.mock('../backend/models/UserModel');
jest.mock('bcryptjs');
jest.mock('../backend/util/LoggerService');
jest.mock('../backend/util/AppointmentNotifications');
jest.mock('jsonwebtoken');

describe('User Controller', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    // Test createUser
    describe('createUser', () => {
        it('should create a new user and send welcome email', async () => {
            const req = {
                body: {
                    name: 'John Doe',
                    email: 'john@example.com',
                    password: 'password123',
                },
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
                cookie: jest.fn(),
            };

            bcrypt.hash.mockResolvedValue('hashedPassword');
            User.mockImplementation(() => ({
                save: jest.fn().mockResolvedValue({ _id: 'user123' }),
            }));
            sendNotificationEmail.mockResolvedValue();
            jwt.sign.mockReturnValue('jwtToken');

            await userController.createUser(req, res);

            expect(bcrypt.hash).toHaveBeenCalledWith(req.body.password, 10);
            expect(User).toHaveBeenCalledWith({ ...req.body, password: 'hashedPassword' });
            expect(res.cookie).toHaveBeenCalledWith('authToken', 'jwtToken', expect.any(Object));
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({ message: 'User created successfully', user: { _id: 'user123' } });
            expect(loggerService.info).toHaveBeenCalledWith(`User created successfully: user123`);
            expect(sendNotificationEmail).toHaveBeenCalledWith({
                patientEmail: req.body.email,
                subject: 'Welcome!',
                message: `Thank you for registering, ${req.body.name}!`,
            });
        });

        it('should return 500 if there is an error', async () => {
            const req = {
                body: {
                    name: 'John Doe',
                    email: 'john@example.com',
                    password: 'password123',
                },
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            bcrypt.hash.mockRejectedValue(new Error('Hashing error'));

            await userController.createUser(req, res);

            expect(loggerService.error).toHaveBeenCalledWith(`Error creating user: Hashing error`);
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: 'Error creating user', error: 'Hashing error' });
        });
    });

    // Test loginUser
    describe('loginUser', () => {
        it('should login the user and return a token', async () => {
            const req = {
                body: {
                    email: 'john@example.com',
                    password: 'password123',
                },
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
                cookie: jest.fn(),
            };

            const userMock = { _id: 'user123', password: 'hashedPassword' };
            User.findOne.mockResolvedValue(userMock);
            bcrypt.compare.mockResolvedValue(true);
            jwt.sign.mockReturnValue('jwtToken');

            await userController.loginUser(req, res);

            expect(User.findOne).toHaveBeenCalledWith({ email: req.body.email });
            expect(bcrypt.compare).toHaveBeenCalledWith(req.body.password, userMock.password);
            expect(res.cookie).toHaveBeenCalledWith('authToken', 'jwtToken', expect.any(Object));
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ message: 'Login successful', userId: userMock._id });
            expect(loggerService.info).toHaveBeenCalledWith(`User logged in: ${userMock._id}`);
        });

        it('should return 400 if user not found', async () => {
            const req = { body: { email: 'wrong@example.com', password: 'password123' } };
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

            User.findOne.mockResolvedValue(null);

            await userController.loginUser(req, res);

            expect(loggerService.warn).toHaveBeenCalledWith(`Invalid login attempt for email: ${req.body.email}`);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ message: 'Invalid credentials' });
        });

        it('should return 400 if password is incorrect', async () => {
            const req = {
                body: {
                    email: 'john@example.com',
                    password: 'wrongPassword',
                },
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            const userMock = { _id: 'user123', password: 'hashedPassword' };
            User.findOne.mockResolvedValue(userMock);
            bcrypt.compare.mockResolvedValue(false);

            await userController.loginUser(req, res);

            expect(loggerService.warn).toHaveBeenCalledWith(`Invalid password attempt for user: ${userMock._id}`);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ message: 'Invalid credentials' });
        });

        it('should return 500 if there is an error', async () => {
            const req = { body: { email: 'john@example.com', password: 'password123' } };
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

            User.findOne.mockRejectedValue(new Error('Database error'));

            await userController.loginUser(req, res);

            expect(loggerService.error).toHaveBeenCalledWith(`Error logging in: Database error`);
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: 'Server error' });
        });
    });

    // Test getAllUsers
    describe('getAllUsers', () => {
        it('should return all users', async () => {
            const req = {};
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            const usersMock = [{ _id: 'user1' }, { _id: 'user2' }];
            User.find.mockResolvedValue(usersMock);

            await userController.getAllUsers(req, res);

            expect(User.find).toHaveBeenCalled();
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(usersMock);
            expect(loggerService.info).toHaveBeenCalledWith(`Fetched ${usersMock.length} users successfully.`);
        });

        it('should return 500 if there is an error', async () => {
            const req = {};
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            User.find.mockRejectedValue(new Error('Database error'));

            await userController.getAllUsers(req, res);

            expect(loggerService.error).toHaveBeenCalledWith(`Error fetching users: Database error`);
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: 'Error fetching users' });
        });
    });

    // Test getUserById
    describe('getUserById', () => {
        it('should return a user by ID', async () => {
            const req = { params: { id: 'user123' } };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            const userMock = { _id: 'user123', name: 'John Doe' };
            User.findById.mockResolvedValue(userMock);

            await userController.getUserById(req, res);

            expect(User.findById).toHaveBeenCalledWith('user123');
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(userMock);
            expect(loggerService.info).toHaveBeenCalledWith(`Fetched user: ${userMock._id}`);
        });

        it('should return 404 if user not found', async () => {
            const req = { params: { id: 'nonexistentId' } };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            User.findById.mockResolvedValue(null);

            await userController.getUserById(req, res);

            expect(loggerService.warn).toHaveBeenCalledWith(`User not found for ID: nonexistentId`);
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ message: 'User not found' });
        });

        it('should return 500 if there is an error', async () => {
            const req = { params: { id: 'user123' } };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            User.findById.mockRejectedValue(new Error('Database error'));

            await userController.getUserById(req, res);

            expect(loggerService.error).toHaveBeenCalledWith(`Error fetching user by ID: Database error`);
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: 'Error fetching user' });
        });
    });

    // Test updateUser
    describe('updateUser', () => {
        it('should update a user by ID', async () => {
            const req = { params: { id: 'user123' }, body: { name: 'Jane Doe' } };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            const userMock = { _id: 'user123', name: 'Jane Doe' };
            User.findByIdAndUpdate.mockResolvedValue(userMock);

            await userController.updateUser(req, res);

            expect(User.findByIdAndUpdate).toHaveBeenCalledWith(req.params.id, req.body, { new: true });
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ message: 'User updated successfully', user: userMock });
            expect(loggerService.info).toHaveBeenCalledWith(`User updated successfully: ${userMock._id}`);
        });

        it('should return 404 if user not found for update', async () => {
            const req = { params: { id: 'nonexistentId' }, body: { name: 'Jane Doe' } };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            User.findByIdAndUpdate.mockResolvedValue(null);

            await userController.updateUser(req, res);

            expect(loggerService.warn).toHaveBeenCalledWith(`User not found for update: nonexistentId`);
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ message: 'User not found' });
        });

        it('should return 400 if there is a validation error', async () => {
            const req = { params: { id: 'user123' }, body: { name: 'Jane Doe' } };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            User.findByIdAndUpdate.mockRejectedValue(new Error('Validation error'));

            await userController.updateUser(req, res);

            expect(loggerService.error).toHaveBeenCalledWith(`Error updating user: Validation error`);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ message: 'Validation error' });
        });
    });

    // Test deleteUser
    describe('deleteUser', () => {
        it('should delete a user by ID', async () => {
            const req = { params: { id: 'user123' } };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            const userMock = { _id: 'user123' };
            User.findByIdAndDelete.mockResolvedValue(userMock);

            await userController.deleteUser(req, res);

            expect(User.findByIdAndDelete).toHaveBeenCalledWith('user123');
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ message: 'User deleted successfully' });
            expect(loggerService.info).toHaveBeenCalledWith(`User deleted successfully: ${userMock._id}`);
        });

        it('should return 404 if user not found for deletion', async () => {
            const req = { params: { id: 'nonexistentId' } };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            User.findByIdAndDelete.mockResolvedValue(null);

            await userController.deleteUser(req, res);

            expect(loggerService.warn).toHaveBeenCalledWith(`User not found for deletion: nonexistentId`);
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ message: 'User not found' });
        });

        it('should return 500 if there is an error', async () => {
            const req = { params: { id: 'user123' } };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            User.findByIdAndDelete.mockRejectedValue(new Error('Database error'));

            await userController.deleteUser(req, res);

            expect(loggerService.error).toHaveBeenCalledWith(`Error deleting user: Database error`);
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: 'Database error' });
        });
    });
});
