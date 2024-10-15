// server.js
const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const patientRoutes = require('./routes/PatientRoutes'); // Import patient routes
const userRoutes = require('./routes/UserRoutes'); // Import user routes
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware

app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true, // if your frontend sends cookies with the request
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowable methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Custom headers
}));
app.use(express.json());

// Connect to MongoDB
db.connect().then(() => {
 

    // Use patient routes
  app.use('/api/patients', patientRoutes); 
  app.use('/api/users', userRoutes); // Use user routes





  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to connect to the database:', err);
});
