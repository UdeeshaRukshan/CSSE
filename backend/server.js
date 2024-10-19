
const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const adminRoutes = require('./routes/AdminRoutes');
const patientRoutes = require('./routes/PatientRoutes'); 
const userRoutes = require('./routes/UserRoutes'); 
const appointmentRoutes = require('./routes/AppointmentRoutes');
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware for CORS
app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true, 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], 
  allowedHeaders: ['Content-Type', 'Authorization'] 
}));

// Middleware to parse JSON request body
app.use(express.json());

// Connect to MongoDB
db.connect().then(() => {
  console.log('Successfully connected to the database');

  // Routes
  app.use('/api/admin', adminRoutes); 
  app.use('/api/patients', patientRoutes); 
  app.use('/api/users', userRoutes); 
  app.use('/api/appointment', appointmentRoutes);

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to connect to the database:', err);
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('An error occurred:', err.stack); // Log the full error stack
  res.status(500).send({ message: 'An internal server error occurred' });
});

// Catch unhandled promise rejections and uncaught exceptions
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // You can exit the process if desired
  // process.exit(1);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception thrown:', err.stack);
  // You can exit the process if desired
  // process.exit(1);
});
