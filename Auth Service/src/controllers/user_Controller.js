const UserService =require('../services/user_Service');


const userService= new UserService();

const create =async(req,res)=>{

   try {

    const response= await userService.create({

        email:req.body.email,
        password:req.body.password
    })
    
    return res.status(201).json({

        success:true,
        message:"Created a new user",
        data:response,
        error:{}
    });

    
   } catch (err) {

    return res.status(500).json({

        message:"Something went wrong Can't create the user",
        data:{},
        success:false,
        error:err
    })
    
   }

}


const signIn= async(req,res)=>{

   try {

    const token = await userService.signIn(req.body.email,req.body.password);

    return res.status(201).json({

        success:true,
        message:"Created a new JWT TOKEN",
        data:token,
        error:{}

    })
    
   } catch (err) {
      
    return res.status(500).json({

        message:"cannot sign in",
        data:{},
        success:false,
        error:err

    })

    
   }

}


const isAuthenticated= async(req,res)=>{

   try {

    const token= req.headers['x-access-token'];

    const response= await userService.isAuthenticated(token);
  
    if(!response){

        return res.status(401).json({

            message:"Invalid Token",
            data:{},
            success:false,
    
        })
        
    } 

    return res.status(201).json({

        success:true,
        message:"Authentication Done",
        data:response,
        error:{}

    })



    
   } catch (err) {

    return res.status(500).json({

        message:"not able to authenticated",
        data:{},
        success:false,
        error:err

    })
    
   }

}

const isAdmin= async(req,res)=>{
     
    try {
        const response=await userService.isAdmin(req.body.id);

        return res.status(200).json({

            message:"Yes user is an Admin",
            data:response,
            success:true,
            error:{}                      

        })
        
    } catch (err) {

        return res.status(500).json({

            message:"not able to authenticated",
            data:{},
            success:false,
            error:err
    
        })
        
    }


}

module.exports={
    create,
    signIn,
    isAuthenticated,
    isAdmin
}