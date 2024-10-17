const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'doctor', 'patient', 'pharmacist'], default: 'patient' }, // Added role
});

const User = model('User', userSchema);
module.export=User;
