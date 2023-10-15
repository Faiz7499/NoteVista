const jwt=require('jsonwebtoken');
const jWT_screat="faizkasdf";


const fetchuser= async (req,res,next)=>{
try {
    const token=req.header('auth-token');
    if (!token) {
     res.status(400).send({error:"please authenticate using the token"});
    }
    const data=jwt.verify(token,jWT_screat);
    req.user=data.user;
    next();
} catch (error) {
    res.status(400).send({error:"please authenticate using the token"});
}

}

module.exports=fetchuser;