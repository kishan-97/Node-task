const router=require('express').Router();

const {getPosts,addPost,updatePost,deletePost}= require('../controllers/postControllers');
const auth=require('../controllers/authController');

router.get('/getposts',auth,getPosts);
router.post('/addPost',auth,addPost);


module.exports=router;