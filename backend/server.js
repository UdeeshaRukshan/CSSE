
const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const patientRoutes = require('./routes/PatientRoutes'); 
const staffRoutes = require('./routes/StaffRoutes');
const userRoutes = require('./routes/UserRoutes'); 
const doctorRoutes = require('./routes/DoctorRoutes'); 
const appointmentRoutes = require('./routes/AppointmentRoutes');
const otherStaff = require('./routes/OtherStaffRoutes');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true, 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'] 
}));
app.use(express.json());

// Connect to MongoDB
db.connect().then(() => {
 

    // Use patient routes
  app.use('/api/patients', patientRoutes); 
  app.use('/api/users', userRoutes); 
  app.use('/api/appointment', appointmentRoutes);
  app.use('/api/staff', staffRoutes);
  app.use('/api/doctor',doctorRoutes);
  app.use('/api/otherStaff',otherStaff);


  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to connect to the database:', err);
});
