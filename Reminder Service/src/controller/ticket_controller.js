const TicketService=require('../Service/email-service');

const create = async (req,res)=>{

     try {

       const response= await TicketService.createNotification(req.body);

       return res.status(201).json({

        success:true,
        data:response,
        error:{},
        message:"Successfully notification has created"

       })

        
     } catch (err) {

        return res.status(500).json({

        success:false,
        data:{},
        error:err,
        message:"Can' create !!!"

        })
        
     }

}

module.exports={
    create
}