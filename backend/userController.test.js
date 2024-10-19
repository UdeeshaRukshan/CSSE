const User = require('../backend/models/UserModel');
const userController = require('../backend/controllers/UserController');
const loggerService = require('../backend/util/LoggerService');

jest.mock('../backend/models/UserModel');
jest.mock('../backend/util/LoggerService');

describe('User Controller', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    // Test createUser
    describe('createUser', () => {
        it('should create a new user and return it', async () => {
            const req = {
                body: {
                    username: 'john_doe',
                    email: 'johne@example.com',
                    password: 'password123',
                },
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            const userMock = {
                save: jest.fn().mockResolvedValue({ _id: 'user123' }),
            };

            // Mock the User model to return the userMock when save is called
            User.prototype.save = jest.fn().mockResolvedValue(userMock);

            await userController.createUser(req, res);

            expect(User.prototype.save).toHaveBeenCalled();
            expect(loggerService.info).toHaveBeenCalledWith('User created successfully: user123');
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({ _id: 'user123' });
        });

        it('should return 500 if there is an error', async () => {
            const req = {
                body: { username: 'john_doe' },
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            User.prototype.save.mockImplementation(() => {
                throw new Error('Test Error');
            });

            await userController.createUser(req, res);

            expect(loggerService.error).toHaveBeenCalledWith('Error creating user: Test Error');
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: 'Error creating user' });
        });
    });

    // Test getUsers
    describe('getUsers', () => {
        it('should fetch and return all users', async () => {
            const req = {};
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            User.find.mockResolvedValue([{ _id: 'user1' }, { _id: 'user2' }]);

            await userController.getAllUsers(req, res);

            expect(User.find).toHaveBeenCalled();
            expect(loggerService.info).toHaveBeenCalledWith('Fetched all users successfully.');
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith([{ _id: 'user1' }, { _id: 'user2' }]);
        });

        it('should return 500 if there is an error', async () => {
            const req = {};
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            User.find.mockRejectedValue(new Error('Test Error'));

            await userController.getAllUsers(req, res);

            expect(loggerService.error).toHaveBeenCalledWith('Error fetching users: Test Error');
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: 'Error fetching users' });
        });
    });

    // Test getUserById
    describe('getUserById', () => {
        it('should return a user by id', async () => {
            const req = { params: { id: 'user123' } };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            User.findById.mockResolvedValue({ _id: 'user123' });

            await userController.getUserById(req, res);

            expect(User.findById).toHaveBeenCalledWith('user123');
            expect(loggerService.info).toHaveBeenCalledWith('Fetched user: user123');
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ _id: 'user123' });
        });

        it('should return 404 if user not found', async () => {
            const req = { params: { id: 'user123' } };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            User.findById.mockResolvedValue(null);

            await userController.getUserById(req, res);

            expect(loggerService.warn).toHaveBeenCalledWith('User not found for ID: user123');
            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ message: 'User not found' });
        });

        it('should return 500 if there is an error', async () => {
            const req = { params: { id: 'user123' } };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };

            User.findById.mockRejectedValue(new Error('Test Error'));

            await userController.getUserById(req, res);

            expect(loggerService.error).toHaveBeenCalledWith('Error fetching user by ID: Test Error');
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: 'Error fetching user' });
        });
    });
});
