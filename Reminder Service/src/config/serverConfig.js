const dotenv= require('dotenv');

dotenv.config();

module.exports={
   
    PORT:process.env.PORT,
    Email_ID:process.env.Email_ID,
    Email_PASS:process.env.Email_PASS

}