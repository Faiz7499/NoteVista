import React, { useContext,useEffect,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Note from './note';
import noteContext from '../context/notecontext';
function Allnotess() {
  const a=useContext(noteContext);
  const{notess,getnote,updatenote,deletenote,setalert}=a;
  const navigate=useNavigate();
  useEffect(() => {
    
    if(localStorage.getItem('token')){
 
      getnote();
    }
    else{
     navigate('/login');
    }
   
     // eslint-disable-next-line
  },);

  const [not,setne]=useState({id:"",title:"",discription:"",tag:""});
  const [id,setid]=useState("");

  const handleoncluck=()=>{
      console.log("clicked");
      console.log(not.id,not.title,not.discription,not.tag);
    updatenote(not.id,not.title,not.discription,not.tag);
    setalert({
      ti:not.etitle,
      message:" Note is Updated Succesfully ! ",
      type:"success"
    })
    
  
  }
  const update=(currentnote)=>{
    
      setne({id:currentnote._id,title:currentnote.title,discription:currentnote.discription,tag:currentnote.tag});
      console.log(not.title);
  }

  const deletenoteeee=(id)=>{
 
     setid(id);
  }

  const dele=()=>{
    
    deletenote(id);
  }

  // const ref=useRef(null)

    const onchange=(e)=>{
      console.log(e.target.value);
      setne({...not,[e.target.name]:e.target.value})
    }

  return (
    <> 
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
        <div className="mb-3 ">
            <label htmlFor="exampleInputEmail1" className="form-label">Note Title</label>
            <input type="email" className="form-control" id="title"  name='title' onChange={onchange}aria-describedby="emailHelp" value={not.title} />
          </div>
          <div className="mb-3 ">
            <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
            <input type="email" className="form-control" id="description"  name='discription' onChange={onchange}aria-describedby="" value={not.discription} />
          </div>
          <div className="mb-3 ">
            <label htmlFor="exampleInputEmail1" className="form-label">Tag</label>
            <input type="email" className="form-control" id="tag"  name='tag' onChange={onchange}aria-describedby="" value={not.tag} />
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleoncluck}>Save changes</button>
        </div>
      </div>
    </div>
  </div>


  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Deleting Confirmation</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p style={{color:'red'}}>Are You Sure ! You want to Delete this Note . this will Permenetly delete</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={dele} >Delete</button>
      </div>
    </div>
  </div>
</div>
    
    <div className='row mt-5'>
      {
        notess.map((element)=>{
          return(
     <Note  key={element._id}  note={element} deletenoteeee={deletenoteeee} updatenote={update} />
     
          )
        })

      }
    </div>
    </>
  )
}

export default Allnotess;
