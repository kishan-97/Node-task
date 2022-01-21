const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');

const userSchema=new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true
    },
    mobile:String,
    password:String,
    tokens:[
       {
           token:{
               type:String,
               required:true
           }
       }
    ]
});

userSchema.methods.generateAuthToken=async function(){
    try{
        console.log(this._id);
        const token=jwt.sign({_id:this._id.toString()},process.env.secret);
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
    }
    catch(e){
        console.log(e);
    }
}

module.exports=new mongoose.model('user',userSchema);