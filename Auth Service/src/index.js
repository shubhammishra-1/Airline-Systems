const express= require('express');

const {PORT} = require('./config/serverConfig');

const apiRoutes=require('./routes/index');
const bodyParser = require('body-parser');


const app= express();


const startServer=()=>{

  app.listen(PORT,()=>{

    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());

    app.use('/api',apiRoutes);
    

    app.get('/AuthHome',(req,res)=>{
      
      return res.status(201).json({
        welcome:"Welcome to Auth Service"
      })

    })

      console.log(`Server is running on ${PORT}...`);

  });

}


startServer();