import React, { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import noteContext from '../context/notecontext';


function Login() {
    const a=useContext(noteContext);
    const {setalert}=a;
    const navigate = useNavigate();

    const [detail,setdetail]=useState({Email:"",password:""});
    const handleclick= async (e)=>{
        e.preventDefault();
        const responce=await fetch('http://localhost:5000/auth/login',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({Email:detail.Email,password:detail.password})
        });
        const re= await responce.json();
        if (re.success) {
            localStorage.setItem('token',re.authentication);
            console.log(localStorage.getItem('token'));
            navigate('/');
            const d={
                ti:"Logged In ! ",
                message:"Successfully ",
                type:"success"
              }
              
              setalert(d);
        }
        else{
            const d={
                ti:"Invalid Creadentials ! ",
                message:"Enter Write Email Or password ",
                type:"danger"
              }
              
              setalert(d);
        }

    };

    const onchange=(e)=>{
        setdetail({...detail,[e.target.name]:e.target.value})
    }


    return (
        <div className=' mt-5 '>
            <div className='row '>
                <div className='col-lg-4 col-md-6 col-sm-8 col-sx-8 logincmnt' style={{margin:'auto',border:'1px solid black'}}>
                    <h3 className='mt-4' style={{fontFamily:'fantasy'}}>Login To Continue</h3>
                    <form onSubmit={handleclick} className='mt-4'>
                        <div className="">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input style={{width:"90%",border:'1px solid black'}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='Email' value={detail.Email} onChange={onchange}  />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input style={{width:"90%",border:'1px solid black'}} type="password" name='password' value={detail.password} onChange={onchange} class="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" class="btn btndss mb-4">Submit</button>
                    </form>
                </div>
              

            </div>
        </div>
    )
}

export default Login
