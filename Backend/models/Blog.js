const { default: mongoose } = require('mongoose');
const monoose=require('mongoose');

const Bugs=new monoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userr"
    },
    username:{
        type:String,
        require:true,

    },
    heading:{
        type:String,
        require:true,

    },
    discription:{
        type:String,
        require:true

    },
    type:{
        type:String,
        require:true
    },
    date:{
        type:String,
        default:Date.now
    },
    likes:{
        type:Number,
        default:0
    }

});

const blog=mongoose.model('blogss',Bugs);

module.exports=blog