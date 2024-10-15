// server.js
const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const patientRoutes = require('./routes/PatientRoutes'); // Import patient routes

const app = express();
const PORT = process.env.PORT || 6000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
db.connect().then(() => {
 

    // Use patient routes
  app.use('/api/patients', patientRoutes); 





  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to connect to the database:', err);
});
