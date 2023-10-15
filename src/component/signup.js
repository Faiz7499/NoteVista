import React, { useContext,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import noteContext from '../context/notecontext';

function Signup() {
    const a=useContext(noteContext);
    const {setalert}=a;
    const navigate=useNavigate();

    const [detail,setdetail]=useState({name:"",Email:"",password:"",cpassword:""});

    const handleclick=async (e)=>{
        e.preventDefault();
        console.log("clicked")
        if (detail.password===detail.cpassword) {
            const name=detail.name;
            const Email=detail.Email;
            const password=detail.password;
            const responce=await fetch('http://localhost:5000/auth/createuser',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name,Email,password})
        });
        const re= await responce.json();
        if(re.success){
            const d={
                ti:"Sucess ",
                message:"Account Created Successfully , Now Login!",
                type:"success"
              }
              
              setalert(d);
               navigate('/login'); 
        }
        }
        else{
            const d={
                ti:"Failed ",
                message:"Password Not Matched !",
                type:"warning"
              }
              
              setalert(d);
        }
        
    }

    const onchange=(e)=>{
        setdetail({...detail,[e.target.name]:e.target.value})
    }
  return (
    <div className='conatiner mt-4 '>
      
   <div className='row'>
    <div className='col-lg-4 col-md-6 col-sm-6 col-xm-4 signup' style={{margin:'auto'}}>
    <h2 style={{fontFamily:'fantasy'}} className='mt-3'>Signup</h2>
          <form onSubmit={handleclick}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input style={{width:"90%",border:'1px solid black'}} type="text" className="form-control" id="exampleInput" onChange={onchange} name='name' value={detail.name} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input style={{width:"90%",border:'1px solid black'}} type="email" className="form-control" id="exampleInputEmail1" onChange={onchange} name='Email' value={detail.Email}  aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input style={{width:"90%",border:'1px solid black'}} type="password" className="form-control" onChange={onchange} name='password' value={detail.password}  id="exampleInputPassw"/>
  </div>  
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
    <input style={{width:"90%",border:'1px solid black'}} type="password" className="form-control" onChange={onchange} name='cpassword' value={detail.cpassword}  id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" className="btn btndss mb-3">Submit</button>
</form></div>

   </div>
    </div>
  )
}

export default Signup
