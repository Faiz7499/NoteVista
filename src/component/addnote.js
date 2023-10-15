import React, { useState,useContext } from 'react'
import noteContext from '../context/notecontext';
function Addnote() {
    const contex=useContext(noteContext);
    const {addnotee,setalert,alert}=contex;
    const[note,setne]=useState({title:"",discription:"",tag:""});
    

    const handleoncluck=(e)=>{
      console.log(note);
        e.preventDefault();
        if (note.title==='' || note.discription==='' || note.tag==='') {
          const d={
            message:"Empty Notes Are Not Allowed !",
            type:"danger"
          }
          setalert(d);
          
        }
        else{
          addnotee(note.title,note.discription,note.tag);
        const d={
          ti:note.title,
          message:"Your Note Has Been Successfully Saved !",
          type:"success"
        }
        
        setalert(d);
        setne({title:"",discription:"",tag:""});
  
        }
    }

    const onchange=(e)=>{
      console.log("bi");
     setne({...note,[e.target.name]:e.target.value})
    }

  return (
    <div>
       <h2 className='mt-5' style={{fontFamily:'fantasy'}}>Add Note</h2>
     <div className='container mt-4'>
      <div className='row'>
        <div className='col-6 notecontainer'>
        <form>
        <div className="mb-3 mt-2 pb-2">
          <label htmlFor="exampleInputEmail1" className="form-label">Note Title</label>
          <input type="email" className="form-control" id="title" value={note.title}  name='title' onChange={onchange}aria-describedby="emailHelp" />
        </div>
        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label">Discription</label>
          <textarea type="email" className="form-control" value={note.discription} onChange={onchange} id="discription" name='discription' aria-describedby="emailHelp" />
        </div>
        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label">Tag</label>
          <input type="email" className="form-control" id="tag" value={note.tag} onChange={onchange} name='tag' aria-describedby="emailHelp" />
        </div>

        <button type="submit" className="btn btndss mb-2" style={{width:'100px'}} onClick={handleoncluck}>Add Note</button>
      </form>
        </div>
        </div>
     </div>
    </div>
  )
}

export default Addnote;
