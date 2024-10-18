
const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const patientRoutes = require('./routes/PatientRoutes'); 
const userRoutes = require('./routes/UserRoutes'); 
const appointmentRoutes = require('./routes/AppointmentRoutes');
const doctorRoutes = require('./routes/UserDoctorRoutes');
const app = express();
const PORT = process.env.PORT || 4000;
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true, 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], 
  allowedHeaders: ['Content-Type', 'Authorization'] 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({   
    secret:'secret',
    resave:false,
    saveUninitialized:false,
    cookie:{
        secure:false,
        maxAge:1000*60*60*24

    }
}));

// Connect to MongoDB
db.connect().then(() => {
 

    // Use patient routes
  app.use('/api/patients', patientRoutes); 
  app.use('/api/users', userRoutes); 
  app.use('/api/appointment', appointmentRoutes);
  
  //app.use('/api/doctor',)
  app.get('/', (req, res) => {
    if(req.session.email){
        return res.json({valid : true , email : req.session.email})
    }else{
        return res.json({valid : false})
    }
})

//User Routes
app.use('/api/doctor', doctorRoutes)

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to connect to the database:', err);
});
