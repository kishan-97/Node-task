const postSchema=require('../models/postSchema');
const jwt=require('jsonwebtoken');

const getPosts=async(req,res)=>{
    try{
        const posts=await postSchema.find({});
        res.json(posts);

    }
    catch(e){
        console.log(e);
    }
}

const addPost=async(req,res)=>{
    try{
        let token=req.headers['authorization'];
        
        if(token.startsWith('Bearer ')){
            token=token.slice(7,token.length);
            console.log(token);
        }

        if(token){
            const verify=await jwt.verify(token,process.env.secret);
            const {message}=req.body;
            console.log(message);
            let newPost=new postSchema({message,createdBy:verify._id.toString()});
            const response=await newPost.save();
            res.json("Post Created");
        }
    }
    catch(e){
        console.log(e);
        res.json(e);
    }
}

module.exports={getPosts,addPost};