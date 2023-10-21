const {AirportService} =require('../services/airport_service');

const airportService=new AirportService();


const create =async (req,res)=>{

    try{

        const result=await airportService.create(req.body);
        
        return res.status(201).json({

            data:result,
            success: true,
            message:"Successfully created Airport...",
            err:{}
        });
    }

    catch(err){
        return res.status(500).json({

            data:{},
            success:false,
            message: "Not able to create the Airport",
            errror:err
        });
    }



};



const destroy =async (req,res)=>{

    try{

        const result=await airportService.destroy(req.params.id);

        return res.status(201).json({

            data:result,
            success: true,
            message:"Successfully deleted the Airport...",
            err:{}
        });
    }

    catch(err){
        return res.status(500).json({

            data:{},
            success:false,
            message: "Not able to delete the Airport",
            errror:err
        });
    }



};


const get =async (req,res)=>{

    try{

        const result=await airportService.get(req.params.id);

        return res.status(201).json({

            data:result,
            success: true,
            message:"Successfully get details of Airport...",
            err:{}
        });
    }

    catch(err){
        return res.status(500).json({

            data:{},
            success:false,
            message: "Not able to fetch Details of Airport",
            errror:err
        });
    }



};


const update =async (req,res)=>{

    try{

        const result=await airportService.update(req.params.id,req.body);

        return res.status(201).json({

            data:result,
            success: true,
            message:"Successfully updated details of Airport...",
            err:{}
        });
    }

    catch(err){
        return res.status(500).json({

            data:{},
            success:false,
            message: "Not able to update the Airport",
            errror:err
        });
    }



 };


 const getAll=async(req,res)=>{
             
    try {
      
      //data is coming as query params  
      const result=await airportService.getAll(req.query);

        return res.status(201).json({

            data:result,
            success: true,
            message:"Successfully fetched All details of Airport...",
            err:{}
        });


        
    } catch (err) {

        return res.status(500).json({

            data:{},
            success:false,
            message: "Not able to fetch Details of Airports",
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