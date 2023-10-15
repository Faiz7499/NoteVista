import React, { useState,useContext } from 'react';
import blogContext from '../context/blogcontext';


function Addblog() {
  const a=useContext(blogContext);
  const {addblog}=a;
    const [blogg,setblogss]=useState({heading:"",discription:"",type:""});

    const onchange=(e)=>{
        setblogss({...blogg,[e.target.name]:e.target.value})
    }
    const handleoncluck=(e)=>{
      e.preventDefault();
    addblog(blogg.heading,blogg.discription,blogg.type);
      setblogss({heading:"",discription:"",type:""});
    }
  return (
    <div>
       <form className='addablogcard'>
        <div className="mb-2">
          <p className='texttype' style={{marginBottom:'15px'}}>POST NEW BLOG....</p>
          
          <label htmlFor="exampleInputEmail1" className="form-label">Blog Heading </label>
          <input type="text" className="form-control inp" id="title" value={blogg.heading}  name='heading' onChange={onchange}aria-describedby="emailHelp" />
        </div>
        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label">Discription</label>
          <textarea type="text" className="form-control inp" value={blogg.discription} onChange={onchange} id="discription" name='discription' aria-describedby="emailHelp" />
        </div>
        <div className="mb-3 ">
         <h6>Blog type :</h6>
          <br/>
          <label htmlFor="exampleInputEmail1" className="form-label" style={{marginRight:'5px'}}>Sports</label>
          <input type='radio'  id="tag" value={'sports'} onChange={onchange} name='type' aria-describedby="emailHelp" style={{marginRight:'10px'}} />

          <label htmlFor="exampleInputEmail1" className="form-label"style={{marginRight:'5px'}} >Education</label>

          <input type='radio' name='type' value={'education'} onChange={onchange} style={{marginRight:'10px'}}/>
          
          <label htmlFor="exampleInputEmail1" className="form-label" style={{marginRight:'5px'}}>Medical</label>
         <input type='radio' name='type' value={'medical'} onChange={onchange}/>
        </div>

        <button type="submit" className="btn btndss mb-2" onClick={handleoncluck}>POST</button>
      </form>
    </div>
  )
}

export default Addblog
