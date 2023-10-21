const CrudRepository= require('./CRUD-repo');

const {Airport} = require('../models/index');

class AirportRepository extends CrudRepository{

     
    constructor(){

        super(Airport);
    }

    //besides crud operations, specific functionality to AirportRepo could be defined below 

    //                  OR

    //if we have new CRUD operations we can 'Override'  by definig below

    


}


module.exports= AirportRepository;