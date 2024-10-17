const mongoose = require('mongoose');


const staffSchema = new mongoose.Schema({
    staffId :{
        type: String,
        required:true
    },
    username:{
        type: String,
        required:true
    },
    fullName :{
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true
    },
    position :{
        type:String,
        required:true
    },
    contact :{
        type:Number,
        required:true
    },
    password :{
        type:String,
        required:true
    },
})
const Staff = mongoose.model("Staff",staffSchema);
module.exports = Staff;