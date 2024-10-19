const mongoose = require('mongoose');

const otherStaffSchema = new mongoose.Schema({
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
    email: {
        type: String,
        required:true
    },
    role:{
        type: String,
        required:true
    },
    

})
const OtherStaff = mongoose.model("OtherStaff",otherStaffSchema);
module.exports = OtherStaff;