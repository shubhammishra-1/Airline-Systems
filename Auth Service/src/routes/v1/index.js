const express =require('express');

const UserController= require('../../controllers/user_Controller');

const {AuthValidator}= require('../../middlewares/index');



const router=express.Router();


router.post('/signup',

AuthValidator.validateUser

,UserController.create);



router.post('/signin',
AuthValidator.validateUser
,UserController.signIn);

router.get('/isAuthenticated',UserController.isAuthenticated);


router.get('/isAdmin',

AuthValidator.adminValidation

,UserController.isAdmin);



module.exports=router;