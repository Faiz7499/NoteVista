const { text } = require('express');
const mongoose=require('mongoose');

const comentSchema=new mongoose.Schema({
    blogid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'blogss'
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userr"
    },username:{
        type:String,
        require:true
    },
    comment:{
        type:String,
        require:true
    }
    ,datee:{
        type:Date,
        default:Date.now
    }
});

const Comments=mongoose.model('comments',comentSchema);
module.exports=Comments;