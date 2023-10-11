const mongoose = require('mongoose');

//  creating schema 
const transactionSchema = new mongoose.Schema({
    status:{
        type:String,
    },
    amount:{
        type:Number
    },
    payment_mode:{
        type:String,
    },
    school:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'School'
    }
    


})


const Transaction = mongoose.model('Transaction',transactionSchema);

// exporting the schema
module.exports = Transaction;

