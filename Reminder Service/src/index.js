const express= require('express');

const bodyParser=require('body-parser');


const {PORT}= require('./config/serverConfig');

//const {sendBasicEmail}=require('./Service/email-service');

const cron= require('node-cron');

const fetchALLEMAILS_in_1min=require('./utills/job');


const startServer=()=>{

    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT,()=>{

    console.log("Server is listening on...",PORT);

    app.get('/reminder',(req,res)=>{

        return res.json({message:"redirected to the reminder service"});
    });


    //sendBasicEmail('xcy@gmail.com','shubhammishram123@gmail.com','Congrats!!!','this is a dummy email');


    // cron.schedule('*/1  * * * *',()=>{
       
    //     console.log("every one minute it will excuted");

    // })

    fetchALLEMAILS_in_1min();




    })


}


startServer();
