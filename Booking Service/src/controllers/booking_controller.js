const BookingService= require('../services/booking_service');


const bookingService = new BookingService();


const create = async(req,res)=>{

   try {

    const response= await bookingService.createBooking(req.body);

    return res.status(201).json({

     message:"Successfully Booking Done...",

     success:true,

     error:{},

     data:response


    })
    
   } catch (err) {

    return res.status(500).json({

        message:"Something went wrong...",
   
        success:false,
   
        error:err,
   
        data:{}
   
   
       })
    
   }


}


module.exports={


    create
}