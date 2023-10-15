const express=require('express');
const router=express.Router();
const userr=require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const fetchuser=require('../midalware/fatchuser');

const jWT_screat="faizkasdf";

router.post('/createuser',[
    //Express Validation
    body('name',"Enter a Valid A Name ").isLength({min:4}),
   
    body('password',"Enter a Valid A password ").isLength({min:5})
],async (req,res)=>{
    let success=false;
    console.log('helolo');
    const error=validationResult(req);
//    const uu=userr(req.body);
//    if(!error.isEmpty()){
//     return res.status(400).json({error});
//    }
//    const user=userr.findOne({Email:req.body.Email})
//    if (user) {
//     console.log(user)
//     // return res.status(400).json({error:"USer already Exist"});
//    }
try{
   
    let user=await  userr.findOne({Email:req.body.Email});
    console.log('r1');
if (user) {
    

    return res.status(400).json({success,"error":"Already Exist"});
}

const salt=await bcrypt.genSalt(10);
const secpass=await bcrypt.hash(req.body.password,salt);
console.log('r2');
   user =await userr.create({
    name:req.body.name,
    Email:req.body.Email,
    password:secpass,
   })
   const data={
    user:{
        id:user.id
    }
   }
   
   const authk=jwt.sign(data,jWT_screat);
   success=true;
   res.status(200).json({success,authk});
}
catch(error){
    console.error(error);
}
  
})


router.post('/login',
[
    body('Email',"Enter a valid Mail").isEmail()
],async (req,res)=>{
    console.log("hello");
    console.log(req.body);
    let success=false;

    const error=validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json(success,{'error':error.array()})
    }
    const Email=req.body.Email;
    const password1=req.body.password;
    const password=String(password1);
    const user=await userr.findOne({Email});
    if (!user) {
        console.log('user find');
      return res.status(400).json(success,{'error':"Invalid cridentials"})  
    }
    console.log(user.password);
   
    const passwordcompare=bcrypt.compareSync(password,user.password);
    if (!passwordcompare) {
        console.log('hjk');
        return res.status(400).json({error:'Wrongpass'})
    }
    const data={
        user:{
            id:user.id
        }
    }
    const authentication=jwt.sign(data,jWT_screat);
   
    success=true;
    res.status(200).json({success,authentication});
   

    
})


router.get('/getdetail',fetchuser,async (req,res)=>{
    try{
       
        const id=req.user.id;
        const user=await userr.findById(id).select("-password");
      
        res.status(200).json(user);
    }
    catch(error){
        res.status(500).send(error);
    }
})



module.exports=router;
