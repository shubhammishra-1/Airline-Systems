const cron= require("node-cron");

const emailService= require('../Service/email-service');

const sender= require('../config/emailConfig');



//every 1 minute we will fetch all Pending emails and will send to users


const setupJobs= ()=>{
       
    cron.schedule('*/1 * * * *',async ()=>{

        const response= await emailService.fetchPendingEmails();

        response.forEach(  async (email) => {

            sender.sendMail({

               to:email.recepientEmail,
               subject:email.subject,
               text:email.content
            },async (err,data)=>{
                   
                if(err){
                    console.log("Cant send email ",err);
                }

                else{
                    console.log("Email has been send successfully...",data);

                    await emailService.updateTicket(email.id,{status:"Success"});


                }

            })

            
        });

        console.log(response);


    });

}

module.exports=setupJobs;