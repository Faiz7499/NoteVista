import React, { useContext, useEffect, useState } from 'react';
import blogContext from '../context/blogcontext';
import Comments from './comments';

function Singleblgstr(props) {
    const [comment,setcmnt]=useState(null);
    const [allcmnt,setallcmnt]=useState([]);

    const a=useContext(blogContext);
    const{singleblog}=a;
    const {blog,liked,onclickk}=props;

    const blogid=singleblog._id;

    const onclickcmnt=async ()=>{
        console.log('onclifg')
    
        const responce=await fetch('http://localhost:5000/blogs/postcoment',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'auth-token':localStorage.getItem('token')
            },
            body:JSON.stringify({comment,blogid})
    })
    setcmnt('');
    
 


}
    const onchange=(e)=>{
        console.log(comment);
        setcmnt(e.target.value);
    }
    const getcmnt= async()=>{
        const responce=await fetch(`http://localhost:5000/blogs/getcoment/${blogid}`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'auth-token':localStorage.getItem('token')
            }
    })
    const rs=await responce.json();
    setallcmnt(rs);
    }
    useEffect(()=>{
        getcmnt();
    },)
  return (
    <div>
       <div className="card fullblg " onClick={()=>{}} >
                <div className="card-body">
               
                    <h5 className="titlebotm1 card-title ">{singleblog.heading} </h5>
                   
                    <p className="card-text discription">{singleblog.discription}....</p>
                    <br/>
                   
                  
                    <div className='row blgfooter'>
                    <div className='col-4'>
                    {liked===0?<i class="fa-regular fa-heart" onClick={onclickk}></i>:<i onClick={onclickk} class="fa-solid fa-heart"></i> }{singleblog.likes}
                        </div>
                        <div className='col-8'>
                        <h6 className="card-title" style={{textAlign:'right'}}>{singleblog.username}</h6>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div style={{textAlign:'center',marginTop:'20px',}}>
                <p>Post Your Comment </p><input style={{border:'1px solid black',height:'40px',width:'25%',borderRadius:'20px',paddingLeft:'10px'}} placeholder='Comment' onChange={onchange} value={comment} /> <span><button className='cmntpost' onClick={onclickcmnt}>POST</button></span>
            </div>
            <div style={{margin:'auto',marginTop:'30px'}}>
               
            {
                  allcmnt.reverse().map((element) => {
                    return (
                      <Comments key={element._id} cmnt={element} />
                    )
                  })
                }
            </div>
    </div>
  )
}

export default Singleblgstr
