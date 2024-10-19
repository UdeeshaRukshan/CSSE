const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    fullname : {
        type: String,
        required:true
    },
    age: {
        type: Number,
        required:true,
    },
    contact :{
        type:Number,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    specialization:{
        type: String,
        required:true
    },
    experience:{
        type: String,
        required:true
    }

})
const Doctor = mongoose.model("Doctor",doctorSchema);
module.exports = Doctor;