const mongoose=require('mongoose');

const likeSchema=new mongoose.Schema({
    blogid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'blogss'
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userr"
    }
});

const Likes=mongoose.model('likes',likeSchema);
module.exports=Likes;