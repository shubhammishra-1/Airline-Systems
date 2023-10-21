const {Booking}= require('../models/index');



class BookingRepository{
   

    async create(data){

             try {

                const booking = await Booking.create(data);
                
                return booking;
                
             } catch (err) {

                console.log("Something went wrong in booking repostory ",err);
                
             }

    }

    async update(bookingId,data){
            
        try {

         //as only we have to update status in booking 'update'

         const booking = await Booking.findByPk(bookingId);

         if(data.status){

            booking.status=data.status;

         }

         await booking.save();

         return booking;

         
        } catch (err) {

         console.log("Something went wrong in booking repository...",err);
         
        }


    }

    


}


module.exports=BookingRepository;