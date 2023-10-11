const mongoose = require('mongoose');

//  creating schema 
const disburseSchema = new mongoose.Schema({

    disburse_status:{
        type:Boolean
    },
    disburse_amount:{
        type:Number
    },
    school:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'School'
    }


  
})


const DisburseSchool = mongoose.model('DisburseSchool',disburseSchema);

// exporting the schema
module.exports = DisburseSchool;

