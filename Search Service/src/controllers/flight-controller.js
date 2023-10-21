const {FlightService} = require('../services/index');

const flightService= new FlightService();


const create =async(req,res)=>{
     
    try {

        const flight=await flightService.createFlight(req.body);

        return res.status(201).json({

            data:flight,
            success:true,
            message: "Successfully creataed the flight",
            errror:{}
        });

    } catch (err) {
        return res.status(500).json({

            data:{},
            success:false,
            message: "Not able to create flight",
            errror:err
        });
        
    }


};



const getAll= async(req,res)=>{

    try {

        const response=await flightService.getAllFlightData(req.query);

        return res.status(201).json({

            data:response,
            success:true,
            message: "Successfully fetched the flight",
            errror:{}
        });

        
    } catch (err) {

        return res.status(500).json({

            data:{},
            success:false,
            message: "Not able to fetch flights",
            errror:err
        });

        
    }
}


const get = async (req,res)=>{

     try {

        const response= await flightService.getFlight(req.params.id);

        return res.status(201).json({

            data:response,
            success:true,
            message: "Successfully fetched the flight",
            errror:{}
        });


        
     } catch (err) {

        return res.status(500).json({

            data:{},
            success:false,
            message: "Not able to fetch flights",
            errror:err
        });
        
     }

}

const update =async(req,res)=>{

    try {

       const response=await flightService.updateFlight(req.params.id,req.body);

       return res.status(201).json({

        data:response,
        success:true,
        message: "Successfully updated the flight",
        errror:{}
    });
        
    } catch (err) {

        return res.status(500).json({

            data:{},
            success:false,
            message: "Not able to update flights",
            errror:err
        });
        
     }


}



module.exports= {

    create,
    getAll,
    get,
    update
};