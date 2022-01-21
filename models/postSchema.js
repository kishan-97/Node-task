const mongoose=require('mongoose');

const postSchema=new mongoose.Schema({
    createdBy:String,
    createdAt:{
        type:Date,
        default:new Date,
    },
    updatedAt:{
        type:Date
    },
    message:String,
})


module.exports=new mongoose.model('post',postSchema);