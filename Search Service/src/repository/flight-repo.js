const {Flight} =require('../models/index');

//importing sqlize operator
const {Op} = require('sequelize');


class FlightRepository{

    //defining a private function for custom filter
    
    #createFilter(data){

        let filter={};
        if(data.arrivalAirportId){

            filter.arrivalAirportId=data.arrivalAirportId

        }

        if(data.departureAirportId){
            
            filter.departureAirportId=data.departureAirportId

        }

        // if(data.minPrice){
            
        //     Object.assign(filter,{price: { [Op.gte]: data.minPrice } });

        // }

        // if(data.maxPrice){
        //     Object.assign(filter, {price: {[Op.lte]: data.maxPrice} } ) ;
        // }


       //assuming we have both min and max price both otherwise use above two and remove this
        Object.assign(filter, {[Op.and]: [ {price : {[Op.gte]:data.minPrice}} , {price : {[Op.lte]:data.maxPrice}} ] } );


       return filter;
    }
       

    async createFlight(data){

            try {
                const flight=await Flight.create(data);
                return flight;
                
            } catch (err) {
                
                console.log('Something went wrong in Flight Repos ',err);
            }

    }

    async getAllFlights(filter){

        try {

            const filterObject=this.#createFilter(filter);
            const flight= await Flight.findAll(
                {
                    where:filterObject
                }
            )

            return flight;
            
        } catch (err) {

            console.log('Something went wrong in Flight Repos ',err);
            
        }

    }

    async getFlight(flightId){
           
        try {

            const flight=await Flight.findOne(flightId);

            return flight;
            
        } catch (err) {
            console.log('Something went wrong in Flight Repos ',err);
            
        }


    }


    async updateFlight(flightId,data){
          
       try {

        await Flight.update(data,{

            where:{
                id: flightId
            }
        })
        
       } catch (err) {
                 
        console.log("Something went wrong in Flight Repo ",err);
        
        
       }


    }




};


module.exports=FlightRepository;