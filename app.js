const express=require('express');
const app=express();
const db=require('./Database/db');

const dotenv=require('dotenv');

dotenv.config();

db();

const userRoutes=require('./routes/userRoutes');
const postRoutes=require('./routes/postRoutes');

const PORT=process.env.PORT || 8000;
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(userRoutes);
app.use(postRoutes);
app.use('/',(req,res)=>{
    res.json('Use /signup to Signup, /login to Login, /posts to view get Posts, /addPost to add Posts');
})

app.listen(PORT,()=>{
    console.log(`Server running at PORT ${PORT}`);
})