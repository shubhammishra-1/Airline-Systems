const express=require('express');

const ApiRoutes=require('./routers/index');



//during importing as a key name of importing keys must be same as exporting
const {PORT,secKey}=require('./config/serverConfig');
const bodyParser = require('body-parser');

const setupAndStartServer=async()=>{

    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',ApiRoutes);

    app.listen(PORT,async()=>{
        
        

        console.log(`Server is runing on ${PORT}...`);
    });

}


setupAndStartServer();

