const nodemailer=require('nodemailer');


const {Email_ID, Email_PASS}=require('./serverConfig');
 
//creating SMTP transport

const sender= nodemailer.createTransport({

    service:'Gmail',

    auth:{

        user:  Email_ID ,
        pass:  Email_PASS
    }
});


module.exports= sender;


