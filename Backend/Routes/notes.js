const express = require('express');
const router = express.Router();
const note = require('../models/Notes');
const fetchuser = require('../midalware/fatchuser');
const { body, validationResult } = require('express-validator');


router.post('/addnotes', fetchuser, [
  body('title', "Enter a Valid A title ").isLength({ min: 4 }),

  body('discription', "Enter a Valid A discription ").isLength({ min: 6 }),
  body('tag', "Enter a Valid A tag ").isLength({ min: 3 })

], async (req, res) => {

  try {

    const { title, discription, tag } = req.body;
    const user = req.user.id;
    const error = validationResult(req);
    if (!error.isEmpty) {
      return res.status(400).json({ error });

    }

    const notes = new note({
      title, discription, tag, user
    })



    notes.save();
    res.send(notes);
  } catch (error) {
    res.status(500).send(error);
  }
});


router.get('/getnotes',fetchuser,async (req,res)=>{
  
  const notess=await note.find({user:req.user.id});
  if (!notess) {
    res.status(500).send("not have any notes")
  }
  
   
  res.status(200).json(notess);

})

router.put('/updatenote/:id',fetchuser,async(req,res)=>{
  const user=req.user.id;
  const {title,discription,tag}=req.body;
  const newnote={};
  if (title) {
    newnote.title=title
  }
  if (discription) {
    newnote.discription=discription
  }
  if (tag) {
    newnote.tag=tag
    
  }
  let noteee=await note.findById(req.params.id);
  if (!noteee) {
    res.status(404).send("NOtes not present");
  }
  if (noteee.user.toString() !== req.user.id) {
    res.status(400).send("You Are Not Allowed to Change ,Someones Information");
  }
  notee=await note.findByIdAndUpdate(req.params.id,{$set:newnote},{new:true})
  res.json(notee);
})


router.delete('/delete/:id',fetchuser,async(req,res)=>{
  try{
    let noteee=await note.findById(req.params.id);
    if (!noteee) {
      res.status(404).send("NOtes not present");
    }
    if (noteee.user.toString() !== req.user.id) {
      res.status(400).send("You Are Not Allowed to Change ,Someones Information");
    }
    notee=await note.findByIdAndDelete(req.params.id)
    res.json("Note HAs been Deleted Succesfully");
  }catch(error){
  res.status(500).send("Internal Server Error");
  }
 
  
})

module.exports = router;