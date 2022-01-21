const userSchema=require('../models/userSchema');
const jwt=require('jsonwebtoken');

const auth=async(req,res,next)=>{
    try{
        let token=req.headers['authorization'];

        if(token.startsWith('Bearer ')){
            token=token.slice(7,token.length);
        }

        if(token){
            const verify=await jwt.verify(token,process.env.secret);
            const user=await userSchema.findOne({_id:verify._id});
            next();
        }
    }
    catch(e)
    {
        console.log(e);
        res.json(e);
    }

}


module.exports=auth;