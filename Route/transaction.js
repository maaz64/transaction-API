// importing required modules and files
const express = require('express');
const router = express.Router();

// importing  controller
const {getAllTransaction, getSingleTransaction, updateStatus} = require('../Controller/transactionController');


// routes to  page
router.get('/all-transactions',getAllTransaction);
router.get('/transaction-detail/:id',getSingleTransaction);
router.put('/status/:id',updateStatus);


// exporting the router
module.exports = router;