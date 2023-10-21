const UserRepository =require('../repository/user_Repo');

const jwt=require('jsonwebtoken');

const {JWT_KEY} = require('../config/serverConfig');

const bcrypt =require('bcrypt');


class UserService{

    constructor(){
        this.userRepository=new UserRepository();
    }

    async create(data){

         try {

            const user=await this.userRepository.create(data);
            return user;
            
         } catch (err) {

            console.log("Something went wrong in Service Layer ",err);
            
         }    

    }

    async createToken(user){

        try {

            const token= jwt.sign(user,JWT_KEY,{expiresIn:'1d'});
            return token;
            
        } catch (err) {

            console.log("Not able to create token ",err);
            
        }
    }

    verifyToken(token){
          
        try {

            const data= jwt.verify(token,JWT_KEY);
            return data;
            
        } catch (err) {

            console.log("Not able to verify the token ",err);
            
        }


    }

    checkPassword(plainPassword,encryptedPassword){
         
        try {

            return bcrypt.compareSync(plainPassword,encryptedPassword);
            
        } catch (err) {
            console.log("Something went wrong in checking password ",err);
        }

    }

    async signIn(email,plainPassword){

        try {
            //find user by email
            const user=await this.userRepository.getByEmail(email);

            //comparing plain password by encrypted password
            const passwordMatching= this.checkPassword(plainPassword,user.password);
            if(!passwordMatching){
                console.log("Password doesnot matched ");
                throw {error: "Incorrect Password"};
            }

            //create token

            const token =this.createToken({email:user.email,id:user.id});

            //returning token to user

            return token;

            
        } catch (err) {

            console.log("Something went wrong in signing process ",err);
            
        }
    }


    async isAuthenticated(token){

        try {
            const response=this.verifyToken(token);

        if(!response){
            throw {error: 'Invalid Token'};
        
        }

        console.log("Verified token --->",response);

        const user= await this.userRepository.getById(response.id);


        if(!user){
            throw {error : 'No user exits with this id'};
        }

        console.log(user);

        return user.id;
            
        } catch (err) {

            console.log("Something went wrong in signing process ",err);
        }
    }


    async isAdmin(userId){

        try {

            return this.userRepository.isAdmin(userId);
            
        } catch (err) {

            console.log("Something went wrong in signing process ",err);
            
        }
    }


}


module.exports=UserService;