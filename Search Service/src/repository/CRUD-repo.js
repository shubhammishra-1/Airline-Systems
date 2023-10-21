

class CrudRepository{

   constructor(model){
        
    this.model=model;

   }

   async create(data){

    try{

        const result=await this.model.create(name);
        return result;
    }

    catch(err){
        console.log("something went wrong in CRUD layer",err);
    }
}

async destroy(modelID){

     try{
           
        await this.model.destroy({


            where:{
                id: modelID
            }
        });

        return true;

     }
     
     catch(err){
           
        console.log("something went wrong in CRUD layer",err);

     }

}

async update(modelID,data){

    try{

       const result=await this.model.update(data,{
         where : {
            id : modelID
         }

       })

       return result;
    }

    catch(err){
           
        console.log("something went wrong in CRUD layer",err);

    }

}

async get(modelID){

    try{
        const result=await this.model.findByPK(modelID);
        return result;
    }
    catch(err){
        console.log("something went wrong in CRUD layer",err);
    }

}


async getAll(){

    try{
        const result=await this.model.findAll();
        return result;
    }
    catch(err){
        console.log("something went wrong in CRUD layer",err);
    }


}


};

module.exports=CrudRepository;

