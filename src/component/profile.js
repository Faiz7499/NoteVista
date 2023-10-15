import React, { useEffect,useContext, useState }  from 'react';
import noteContext from '../context/notecontext';
import blogContext from '../context/blogcontext';
import Blogstrp from './blogstrp';

function Profile() {
    const b=useContext(blogContext);
    const a=useContext(noteContext);
    const{detail,detailsss}=a;
    const{personalblog,pblog,deleteblog}=b;
  const [id,setidd]=useState();
   useEffect(()=>{
    personalblog();
    detailsss();
   },[]);


   const dele=()=>{
    deleteblog(id);
   }
  const deleteblogeee=(id)=>{
    setidd(id);
  }

     
     
  return (
    <>
     <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Deleting Confirmation</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p style={{color:'red'}}>Are You Sure ! You want to Delete this Blog . this will Permenetly delete</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={dele} >Delete</button>
      </div>
    </div>
  </div>
</div>
    <div className='container mt-5'>
        <div className='row'>
        <div className='col-lg-4 col-md-6 col-sm-12 col'>
            <div className='' style={{border:'1px solid black',width:'200px',height:'200px',textAlign:'center',borderRadius:'100px',alignItems:'center'}}><i className="fa-solid fa-8x fa-user mt-3"></i>
            </div>
            <div style={{marginTop:"50px"}}>
                <h4>Name :{detail.name}</h4>
                <h4>Email : {detail.Email}</h4>
            </div>
        </div>
        <div className='col-lg-8 col-md-6 col-sm-12 col'>
            <h2>Your  Blogs </h2>
              <div className='row'>
             
              {
                  pblog.map((element) => {
                    return (
                      <Blogstrp key={element._id} blog={element} deleteblogeee={deleteblogeee} />
                    )
                  })
                }
         
              </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Profile;