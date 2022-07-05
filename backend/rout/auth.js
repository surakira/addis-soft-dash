const express=require('express');
const router=express.Router();
const {registerUser,loginUser}=require('../controler/authControler');

    const { isAuthenticatedUser, authrizeRoles } = require('../middlewares/auth');
    router.route('/register').post(registerUser);
    router.route('/login').post(loginUser)
    module.exports=router