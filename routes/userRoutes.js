const router=require('express').Router();
const {signup,login,getusers,updateuser,deleteuser} =require('../controllers/userController');

router.post('/signup',signup);
router.post('/login',login);
module.exports=router;