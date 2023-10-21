const BookingRepository =require('../repository/booking-repo');

const axios= require('axios');

const {SearchService_PATH}= require('../config/serverConfig');




class BookingService{

   constructor(){

     this.bookingRepository = new BookingRepository();

   }

   async createBooking(data){
          
    try {

      const flightId= data.flightId;

      const getFlightPATH_URL=`${SearchService_PATH}/api/v1/flights/${flightId}`;

      const response=await axios.get(getFlightPATH_URL);

      const flight=response.data.data;

      const FlightPrice= flight.price;

      const total_AVL_seats= flight.totalSeats;

      const required_Seats=data.seats;

      if(required_Seats>total_AVL_seats){
            
        throw console.error("Insuficent Seats");

      }

      //re structuring the object as user will not tell us about price

      const totalCost=required_Seats.FlightPrice;

      const cost=totalCost;


      const bookingPayload= {...data,cost};

      const booking= await this.bookingRepository.create(bookingPayload);

      const updateFlightReq_URL= `${SearchService_PATH}/api/v1/flights/${booking.flightId}`;

      await axios.patch(updateFlightReq_URL,{totalSeats: total_AVL_seats-required_Seats });

      const finalBooking=await this.bookingRepository.update(booking.id,{status:"Booked"});



      return finalBooking;

        
        
    } catch (err) {

      console.log("Something went wrong in Service Layer...",err);
        
    }


   }


}

module.exports=BookingService;