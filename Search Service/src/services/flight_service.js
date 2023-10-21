const {FlightRepository,AirplaneRepository}=require('../repository/index');
const compare = require('../utils/isValidDates');


class FlightService{

    constructor(){

        this.airplaneRepository=new AirplaneRepository();
        this.flightRepository=new FlightRepository();

    }

    async createFlight(data){

         try {

            //checking dates arrival > departure

            if(compare(data.arrivalTime,data.departureTime)){

                const airplane= await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight=await this.flightRepository.createFlight({
                ...data,totalSeats:airplane.capacity
            });

            return flight;

            }

            else{
                console.log("Arrival Time can't be less than departure time");
            }

            

            
         } catch (err) {

            console.log('Something went wrong in Flight Service ',err);
            
         }

    }

    async getAllFlightData(data){
           
        try {

            const flights= await this.flightRepository.getAllFlights(data);
            return flights;
            
        } catch (err) {

            console.log('Something went wrong in Flight Service ',err);
            
        }

    }

    async getFlight(flightId){

        try {

            const flight=await this.flightRepository.getFlight(flightId);

            return flight;
            
        } catch (err) {

            console.log('Something went wrong in Flight Service ',err);
            
        }
    }

    async updateFlight(flightId,data){

        try {

            const res=await this.flightRepository.updateFlight(flightId,data);

            return res;
            
        } catch (err) {

            console.log('Something went wrong in Flight Service ',err);
            
        }


    }


};

module.exports=FlightService;


// flightNumber,
// airplaneId,
// departureAirportId,
// arrivalAirportId,
// arrivalTime,
// departureTime,
// price,
// totalSeats --> airplane