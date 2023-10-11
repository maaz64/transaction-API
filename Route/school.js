// importing required modules and files
const express = require('express');
const router = express.Router();

// importing  controller
const {disbursedAmount,disbursedSchool} = require('../Controller/schoolController');


// routes to  page
router.post('/disburse-amount/:id',disbursedAmount);
router.get('/disburse-school',disbursedSchool);



// exporting the router
module.exports = router;