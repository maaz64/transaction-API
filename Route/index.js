// importing required modules and files
const express = require('express');
const router = express.Router();

// importing  controller


// routes to  page
router.use('/transaction',require('./transaction'));
router.use('/school',require('./school'));


// exporting the router
module.exports = router;