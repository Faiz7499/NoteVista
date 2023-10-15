const express=require('express');
const router=express.Router();

const userr=require('../models/User');
const fetchuser=require('../midalware/fatchuser');
const blog = require('../models/Blog');
const Likes=require('../models/blogslike');
const Comments=require('../models/comments');
router.post('/createblog',fetchuser,async (req,res)=>{
    const id=req.user.id;
  console.log(req.body);
  try {
    const userrr=await userr.findById(id);
    if (!userrr) {
        res.status(404).json({'error':'Failed To save '});
    }
    console.log('r')
    const username=userrr.name;
    console.log(username);
    const cr =await blog.create({
        user:id,
        username:username,
        heading:req.body.heading,
        discription:req.body.discription,
        type:req.body.type
       })
       console.log(cr);
   
    //    const cr=new blog({
    //     user,heading,discription,type
    //    })
    //    cr.save();
   res.status(200).json(cr);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/getblog',async (req,res)=>{
    
    try {
        const blogs=await blog.find();
        if (!blogs) {
            res.status(400).send("No Blogs Are available");

        }
         res.status(200).json(blogs);
    } catch (error) {
        res.status(400).json(error);
    }

});

router.get('/getpblog',fetchuser,async (req,res)=>{
  
    try {
        const blogs=await blog.find({user:req.user.id});
        if (!blogs) {
            res.status(400).send("No Blogs Are available");

        }
         res.status(200).json(blogs);
    } catch (error) {
        res.status(400).json(error);
    }

});
router.delete('/deleteblog/:id',fetchuser,async(req,res)=>{
    console.log('reched');
    try{
      let blogs=await blog.findById(req.params.id);
      if (!blogs) {
        res.status(404).send("NOtes not present");
      }
      if (blogs.user.toString() !== req.user.id) {
        res.status(400).json({'message':'Your Are Not Allowed'});
      }
      blogss=await blog.findByIdAndDelete(req.params.id)
      res.status(200).json({'message':'Deleted'});
    }
    catch(error){
    res.status(500).send("Internal Server Error");
    }
   
    
  });

  router.get('/checklike/:id',fetchuser,async(req,res)=>{
  
    try {
    const userblog=await Likes.findOne({blogid:req.params.id,userid:req.user.id});
    if(userblog){
    
       res.json({"lk":1});
    }
    else{
      res.json({"lk":0});
    }
    } catch (error) {
      res.status(404).send('Internal Server Error');
    }
  })

  router.put('/checklike/:id',fetchuser,async (req,res)=>{
    console.log("helll");
        const blogid=req.params.id;
        const userid=req.user.id;
       
        try{
          const userblog=await Likes.findOne({blogid:req.params.id,userid:req.user.id});
          if(userblog){
             const blogg=await blog.findById(blogid);
            const like=blogg.likes-1;
             await blog.findByIdAndUpdate(req.params.id,{$set:{likes:like}},{new:true});
             await Likes.findOneAndDelete({blogid:req.params.id,userid:req.user.id});
             res.status(200).json({'message':'success'});
          }
          else{
            const blogg=await blog.findById(blogid);
            const like=blogg.likes+1;
             await blog.findByIdAndUpdate(req.params.id,{$set:{likes:like}},{new:true});
              const likk=new Likes({
               blogid,userid
              })
             likk.save();
             res.status(200).json({'message':'success'});
          }
         
        }
        catch{
          res.status(400).json('error');
        }
  })

  router.post('/postcoment',fetchuser,async (req,res)=>{
     const user=req.user.id;
     console.log(req.body)
     try {
      const usernam=await userr.findById(user);
      const comments=await Comments.create({
        blogid:req.body.blogid,
   
        userid:user,
        comment:req.body.comment,
        username:usernam.name

      })
      res.status(200).json({"message":"success"});
     } catch (error) {
      res.status(404).json({"message":"Internal server Error "});
     }
  })

  router.get('/getcoment/:id',fetchuser,async (req,res)=>{
    const user=req.user.id;
    const id=req.params.id;

    try {
      const allcoments=await Comments.find({blogid:id});
      res.status(200).json(allcoments);
    } catch (error) {
     res.status(404).json({"message":"Internal server Error "});
    }
 })







module.exports=router;