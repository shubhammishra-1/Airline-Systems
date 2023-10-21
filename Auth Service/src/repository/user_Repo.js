const {User}= require('../models/index');

class UserRepository {

    async create(data){

        try {
            const user= await User.create(data);
            return user;
        
        } catch (err) {
           console.log("Something went wrong in Repo Layer ", err);
        }

    }


    async destroy(userId){

        try {
            
             await User.destroy({
                where:{
                    id:userId
                }
             });
             
             return true;

        
        } catch (err) {
           console.log("Something went wrong in Repo Layer ", err);
        }


    }

    async getById(userId){

        try {

            const user=await User.findByPk(userId);

            return user;
            
        } catch (err) {

            console.log("Something went wrong in Repo Layer ",err);
            
        }
    }

    async getByEmail(userEmail){
            
        try {

            const user= await User.findOne({
                where:{
                    email:userEmail
                }
            });
            return user;
            
        } catch (err) {

            console.log("Something went wrong in Repo layer ",err);
            
        }

    }

    async isAdmin(userId){

       try {

        const user= await User.findOne(userId);
        const adminRole=await Role.findOne({
            where:{
                name:'ADMIN'
            }
        });

        return user.hasRole(adminRole);
        
       } catch (err) {

        console.log("Something went wrong in Repo layer ",err);
        
       }

    }


}

module.exports=UserRepository;