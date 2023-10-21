const {NotificationTicket}=require('../models/index');
const {Op}= require("sequelize");

class TicketRepository{
    
    async getAll(){

        try {

            const tickets= await NotificationTicket.findAll();
            return tickets;
            
        } catch (err) {

            console.log("Something went wrong in repository layer...",err);
            
        }
    }


    async create(data){

        try {

            const ticket= await NotificationTicket.create(data);

            return ticket;


            
        } catch (err) {

            console.log("Something went wrong in repository layer...",err);
            
        }

        
    }

    async get(filter){

        try {

             const ticket= await NotificationTicket.findAll({
                where:{
                    status:filter.status,

                notificationTime:{
                    [Op.lte]:new Date()
                }


                }  
             })

             return ticket;

            
        } catch (err) {

            console.log("Something went wrong in repository layer...",err);
            
        }

    }

    async update(ticketId,data){

        try {

            const ticket= await NotificationTicket.findByPk(ticketId);

            ticket.status=data.status;

            await ticket.save();

            return ticket;


            
        } catch (err) {

            console.log("Something went wrong in repository layer...",err);


            
        }   

    }

}



module.exports=TicketRepository;