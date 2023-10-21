
const {City} = require('../models/index');

const { Op } = require('sequelize');


//Crud operations on City

class CityRepository{
   
    async createCity({name}){

        try{

            const city=await City.create({name});
            return city;
        }

        catch(err){
            console.log("something went wrong in repo layer",err);
        }
    }

    async deleteCity(cityId){

         try{
               
            await City.destroy({


                where:{
                    id: cityId
                }
            });

            return true;

         }
         
         catch(err){
               
            console.log("something went wrong in repo layer",err);

         }

    }

    async updateCity(cityId,data){

        try{

           const city=await City.update(data,{
             where : {
                id : cityId
             }

           })

           return city;
        }

        catch(err){
               
            console.log("something went wrong in repo layer",err);

        }

    }

    async getCity(cityId){

        try{
            const city=await City.findByPK(cityId);
            return city;
        }
        catch(err){
            console.log("something went wrong in repo layer",err);
        }



    }

    async getAllCities(filter){
            
        try {


            //filtering data by chars

            if(filter.name){

                const cities=await City.findAll({

                    where:{
                        name:{

                            [Op.startsWith]: filter.name

                        }
                    }
                })
                
                return cities;
                 
            }

            const cities= await City.findAll();
            return cities;
            
        } catch (err) {
            
            console.log("something went wrong in repo layer",err);
        }


    }
  


}


module.exports=CityRepository;