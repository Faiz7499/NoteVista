const { hash } = require('bcryptjs');
const { default: mongoose } = require('mongoose');
const monoose=require('mongoose');

const Userscema=new monoose.Schema({
    name:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    date:{
        type:String,
        default:Date.now
    }
});

const userr=mongoose.model('user',Userscema);

module.exports=userr