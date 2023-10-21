class CrudService{

    constructor(repository){

      this.repository= repository;

    }

    async create(data){

      try{
          const result=await this.repository.create(data);
          return result;
      }

      catch(err){
        console.log("something went wrong in CRUD layer",err);
      }


    }

    async destroy(id){

      try{
          const result=await this.repository.destroy(id);
          return result;
      }

      catch(err){
        console.log("something went wrong in CRUD layer",err);
      }


    }

    async update(Id,data){
             
      try{
          const result=await this.repository.update(Id,data);
          return result;
      }

      catch(err){
        console.log("something went wrong in CRUD layer",err);
      }


    }

    async get(id){

      try{
          const result=await this.repository.getCity(id);
          return result;
      }

      catch(err){
        console.log("something went wrong in CRUD layer",err);
      }


    }

    async getAll(){

      try {

        const result= await this.repository.getAll();
        return result;
        
      } catch (err) {

        console.log("something went wrong in CRUD layer",err);
        
      }


    }


}

module.exports=CrudService;