const dotenv=require('dotenv');

dotenv.config();


const PORT=process.env.PORT;

const secKey=process.env.Sec_Key; 


module.exports={

    PORT:PORT,
    secKey:secKey

};