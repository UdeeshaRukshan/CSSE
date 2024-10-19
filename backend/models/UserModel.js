const { Schema, model } = require('mongoose');
const { type } = require('os');

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'doctor', 'patient', 'pharmacist'], default: 'patient' },
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date }
}, {
  timestamps: true // This option adds createdAt and updatedAt fields
});

const User = model('User', userSchema);
module.exports=User;
