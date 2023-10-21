const {CityService}= require('../services/index');

const cityServise=new CityService();


//POST ->/city

const create =async (req,res)=>{

    try{

        const city=await cityServise.createCity(req.body);
        
        return res.status(201).json({

            data:city,
            success: true,
            message:"Successfully created...",
            err:{}
        });
    }

    catch(err){
        return res.status(500).json({

            data:{},
            success:false,
            message: "Not able to create a city",
            errror:err
        });
    }



};

//DELETE -> /city/:id


const destroy =async (req,res)=>{

    try{

        const city=await cityServise.deleteCity(req.params.id);

        return res.status(201).json({

            data:city,
            success: true,
            message:"Successfully deleted...",
            err:{}
        });
    }

    catch(err){
        return res.status(500).json({

            data:{},
            success:false,
            message: "Not able to delete a city",
            errror:err
        });
    }



};

//GET -> /city/:id

const get =async (req,res)=>{

    try{

        const city=await cityServise.getCity(req.params.id);

        return res.status(201).json({

            data:city,
            success: true,
            message:"Successfully get details...",
            err:{}
        });
    }

    catch(err){
        return res.status(500).json({

            data:{},
            success:false,
            message: "Not able to fetch the city",
            errror:err
        });
    }



};

//PATCH -> /city/:id -> req.body


const update =async (req,res)=>{

    try{

        const city=await cityServise.updateCity(req.params.id,req.body);

        return res.status(201).json({

            data:city,
            success: true,
            message:"Successfully updated details...",
            err:{}
        });
    }

    catch(err){
        return res.status(500).json({

            data:{},
            success:false,
            message: "Not able to update the city",
            errror:err
        });
    }



 };


 const getAll=async(req,res)=>{
             
    try {
      
      //data is coming as query params  
      const cities=await cityServise.getAllCities(req.query);

        return res.status(201).json({

            data:cities,
            success: true,
            message:"Successfully updated details...",
            err:{}
        });


        
    } catch (err) {

        return res.status(500).json({

            data:{},
            success:false,
            message: "Not able to fetch the cities",
            errror:err
        });
        
    }

} 


module.exports={
    create,
    destroy,
    get,
    update,
    getAll
};