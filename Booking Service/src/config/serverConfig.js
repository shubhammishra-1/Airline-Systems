const dotenv=require('dotenv');

dotenv.config();

module.exports={
    
    PORT: process.env.PORT,
    SearchService_PATH:process.env.SearchService_PATH

}