const { default: mongoose } = require('mongoose');
const monoose=require('mongoose');

const Noteschema=new monoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userr"
    },
    title:{
        type:String,
        require:true
    },
    discription:{
        type:String,
        require:true
    },
    tag:{
        type:String,
        require:true
    },
    date:{
        type:String,
        default:Date.now
    }
});

const note=mongoose.model('notes',Noteschema);

module.exports=note