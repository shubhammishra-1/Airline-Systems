const  express = require('express');

const BookingController=require('../../controllers/booking_controller');


const router= express.Router();


router.post('/booking',BookingController.create);


module.exports=router;