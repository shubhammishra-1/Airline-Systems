const sender= require('../config/emailConfig');
const TicketRepository = require('../repository/ticket_repo');

const repo= new TicketRepository();


const sendBasicEmail=async (from,to,subject,body)=>{

  try {

    const response=await sender.sendMail({
        from:from,
        to:to,
        subject:subject,
        text:body
      })
    
      console.log(response);
    
  } catch (err) {

    console.log('Something went wrong in service layer ',err);
    
  }


}


const fetchPendingEmails= async (timestamp)=>{

  try {

    const response=await repo.get({status:"Pending"});

    return response;

    
  } catch (err) {

    console.log('Something went wrong in service layer ',err);
    
    
  }

}


const createNotification=async (data)=>{
   
  try {

    const response= await repo.create(data);

    return response;
    
  } catch (err) {
    
    console.log('Something went wrong in service layer ',err);
    
  }

}


const updateTicket= async(ticketId,data)=>{
     
  try {

    const response=await repo.update(ticketId,data);

    return response;
    
  } catch (err) {
     
    console.log('Something went wrong in service layer ',err);

    
  }


}


module.exports={
    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateTicket
}