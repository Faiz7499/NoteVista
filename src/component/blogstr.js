import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import blogContext from '../context/blogcontext';


import {  } from 'react-router-dom';

function Blogstr(props) {
    const a=useContext(blogContext);
    const {setsingleblog}=a;

    const navigate = useNavigate();
    const {blog}=props;
    const [liked,setliked]=useState(0);
    const onclickk=async(e)=>{
        e.preventDefault();
        console.log('helpp')
        const responce=await fetch(`http://localhost:5000/blogs/checklike/${blog._id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
                'auth-token':localStorage.getItem('token')
            }
        });
      
        
    }
    const likkk=async()=>{
        const responce=await fetch(`http://localhost:5000/blogs/checklike/${blog._id}`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'auth-token':localStorage.getItem('token')
            }
        });
       const rp=await responce.json();
        if(rp.lk===1){
            setliked(1);
         }
         else{
             setliked(0);
         }
    }

    useEffect(()=>{
     
        likkk();

    },)
    const  trimtext =(text)=>{
         const words=text.split(' ');
         if (words.length>7) {
            return words.slice(0,7).join(' ');
         }
         else{
            return text;
         }
    }
    const  trimheading =(text)=>{
        const words=text.split(' ');
        if (words.length>2) {
           return words.slice(0,2).join(' ');
        }
        else{
           return text;
        }
   }
   const fullblog=(blog)=>{
    console.log('clicked');
    setsingleblog(blog);
    navigate('/single')
   }


 
    return (
       
         
            <div className='  col-md-6 col-lg-3 col-sm-6 col-xs-4 col blggs '>
            <div className="card blgstr "  >
                <div className="card-body">
               
                    <h5 className="titlebotm card-title ">{trimheading(blog.heading)} </h5>
                   
                    <p className="card-text discription" onClick={()=>{ return fullblog(blog)}}>{trimtext(blog.discription)}....</p>
                    <br/>
                   
                  
                    <div className='row blgfooter'>
                    <div className='col-4'>
                    {liked===0?<i class="fa-regular fa-heart" onClick={onclickk}></i>:<i onClick={onclickk} class="fa-solid fa-heart"></i> }{blog.likes}
                        </div>
                        <div className='col-8'>
                        <h6 className="card-title">{blog.username}</h6>
                        </div>
                    </div>
                    
                </div>
            </div>
            </div>
         
            //<p onClick={onclickk}>like</p>:<p onClick={onclickk}>dislike</p>
    )
}

export default Blogstr
