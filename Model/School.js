const mongoose = require('mongoose');

//  creating schema 
const schoolSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    
    student_count:{
        type:Number
    },
    school_type:{
        type:String,
    },
    phone_number:{
        type:String
    }

})


const School = mongoose.model('School',schoolSchema);

// exporting the schema
module.exports = School;

