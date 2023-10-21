const bodyParser = require('body-parser');
const express= require('express');
const axios= require('axios');
const rateLimit= require('express-rate-limit');
const {createProxyMiddleware}= require('http-proxy-middleware');
const morgan=require('morgan');
const app= express();


const PORT=3005;

const limiter=rateLimit({
   windowMs:2*60*1000,
   max:5
});

app.use(morgan('combined'));  // this should be above so that it can log every request

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(limiter);


//checking authentication

app.use('/',async(req,res,next)=>{
     
   try {

      console.log(req.headers['x-access-token']);

      const response=await axios.get('http://localhost:800/api/v1/isauthenticated',{
         headers:{
            'x-access-token':req.headers['x-access-token']
         }
      });

      console.log(response.data);

      if(response.data.success){
         console.log("Auth DONE...\/");
         next();
      }

      else{

         return res.status(401).json({
            message:"Unautherized"
         })

      }


      
   } catch (error) {

      return res.status(401).json({
         message:"Unautherized"
      })
      
   }

});


app.use('/AuthHome',createProxyMiddleware({target:'http://localhost:800',changeOrigin : true}));



app.get('/home',(req,res)=>{
  
   return res.json({message:"hitting Home of API services"});

})


app.listen(PORT,()=>{

   console.log("Server running at ",PORT);

})