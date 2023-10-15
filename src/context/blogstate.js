import React, { useState } from 'react';
import blogContext from './blogcontext';
import { json } from 'react-router-dom';

function Blogstate(props) {
    const [blogss,setblogss]=useState([]);
    const[singleblog,setsingleblog]=useState([]);

    const getblog=async ()=>{
        const responce=await fetch(`http://localhost:5000/blogs/getblog`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        });
        const data=await responce.json();
        setblogss(data);

    }

    const addblog=async (heading,discription,type)=>{
        const responce=await fetch(`http://localhost:5000/blogs/createblog`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'auth-token':localStorage.getItem('token')
            },
            body:JSON.stringify({heading,discription,type})
        });
        const lt=await responce.json();
    }


    const [pblog,setpblog]=useState([]);

    const personalblog=async ()=>{

        const responce=await fetch(`http://localhost:5000/blogs/getpblog`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'auth-token':localStorage.getItem('token')
            },
           
        });
        const lt=await responce.json();
        setpblog(lt);

    }
    const deleteblog=async (id)=>{
        const responce=await fetch(`http://localhost:5000/blogs/deleteblog/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                'auth-token':localStorage.getItem('token')
            },
           
        });
        const lt=await responce.json();
        
    }


  return (
    <blogContext.Provider value={{blogss , getblog,addblog,personalblog,pblog,deleteblog,singleblog,setsingleblog}}>
    {props.children}
 </blogContext.Provider>
  )
}

export default Blogstate