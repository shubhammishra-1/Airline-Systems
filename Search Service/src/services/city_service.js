const {CityRepository} = require('../repository/index');

class CityService{

      constructor(){

        this.cityRepository= new CityRepository();

      }

      async createCity(data){

        try{
            const city=await this.cityRepository.createCity(data);
            return city;
        }

        catch(err){
          console.log("something went wrong in service layer",err);
        }


      }

      async deleteCity(cityId){

        try{
            const response=await this.cityRepository.deleteCity(cityId);
            return response;
        }

        catch(err){
          console.log("something went wrong in service layer",err);
        }


      }

      async updateCity(cityId,data){
               
        try{
            const city=await this.cityRepository.updateCity(cityId,data);
            return city;
        }

        catch(err){
          console.log("something went wrong in service layer",err);
        }


      }

      async getCity(cityId){

        try{
            const city=await this.cityRepository.getCity(cityId);
            return city;
        }

        catch(err){
          console.log("something went wrong in service layer",err);
        }


      }

      async getAllCities(filter){

        try {

          const cities= await this.cityRepository.getAllCities(filter);
          return cities;
          
        } catch (err) {

          console.log("something went wrong in service layer",err);
          
        }


      }


}

module.exports=CityService;