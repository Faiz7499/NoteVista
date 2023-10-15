const monooge=require('mongoose');
const url='mongodb://127.0.0.1:27017/notebook';
const connecttodb=()=>{
    monooge.connect(url).then(()=>{
        console.log("connection successfull");
    }).catch(error=>console.log(error))
   
}

module.exports=connecttodb