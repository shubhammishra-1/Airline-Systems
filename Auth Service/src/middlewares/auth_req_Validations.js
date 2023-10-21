
const validateUser = (req,res,next)=>{
         
    if(!req.body.email || !req.body.password){

        return res.status(400).json({
            success:false,
            data:{},
            message:"Something went wrong ",
            err: "Email or Password is missing"
        })
    }

    next();

}

const adminValidation=(req,res,next)=>{
      if(!req.body.id){

        return res.status(400).json({

              success:false,
              message:"Id is not given",
              data:{}

        })
      }
      
      next();

}

module.exports={
    validateUser,
    adminValidation
}