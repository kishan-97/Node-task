const userSchema=require('../models/userSchema');

const signup=async(req,res)=>{
    try{
        const {name,email,mobile,password}=req.body;
        let user=new userSchema({name,email,mobile,password});
        const token=await user.generateAuthToken();
        const cuser=await user.save();
        console.log(cuser);
        res.json({token});
    }
    catch(e){
        console.log(e);
    }
}
const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await userSchema.findOne({email:email});
        if(!user)
        {
            res.json("Invalid Email/Password");
        }
        const token=await user.generateAuthToken();
        res.json({token});

    }
    catch(e){
        console.log(e);
    }
}

module.exports={signup,login};