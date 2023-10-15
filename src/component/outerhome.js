import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import blogContext from '../context/blogcontext';
import Blogstr from './blogstr';
import Addblog from './addblog';


function Outerhome(props) {
  const a = useContext(blogContext);
  const { blogss, getblog } = a;
  const navigate = useNavigate();

 

  useEffect(() => {
   props.setn(50);
    if(localStorage.getItem('token')){
    props.setn(750);
      getblog();
    props.setn(100);
    }
    else{
      props.setn(70);
     navigate('/login');
    props.setn(100);
    }
    
  },);
  const sportss = blogss.filter(item => item.type === 'sports');
  const Education = blogss.filter(item => item.type === 'education');
  
  const Medical=blogss.filter(item => item.type === 'medical');

  return (
    <>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <Addblog />
      </div>
     
    </div>
  </div>
</div>
    <div>
       {props.setn(20)}
   
   

      <h2 className='texttype mheading' style={{textAlign:'center',position:'sticky',top:'0px',width:'100%',backgroundColor:'rgb(229, 229, 229)',marginTop:'10px',zIndex:'1'}}>Trending Blogs !  <span className='' style={{marginLeft:"20px"}}><button type="button" className="btn btndsss"  data-bs-toggle="modal" data-bs-target="#exampleModal">
  POST NEW ONE!
</button></span></h2>

      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12'>
            <h4 style={{marginTop:'20px'}} className='typeheading'>Sports Blogs !</h4>
            
             <div className='container'>
             <div className='row'>

{
  sportss.reverse().map((element) => {
    return (
      <Blogstr key={element._id} blog={element} />
    )
  })
}

</div>
             </div>
         

            <h4 style={{marginTop:'20px'}} className='typeheading'>Education Blogs !</h4>
            
              <div className='row'>
               

                  {
                    Education.reverse().map((element) => {
                      return (
                        <Blogstr key={element._id} blog={element} />
                      )
                    })
                  }

              
              </div>

              <h4 style={{marginTop:'20px'}} className='typeheading'>Medical Blogs !</h4>
            
              <div className='row'>
               

                  {
                    Medical.reverse().map((element) => {
                      return (
                        <Blogstr key={element._id} blog={element} />
                      )
                    })
                  }

              
              </div>
          
          </div>



        
        </div>
      </div>

    </div>
    </>

  )
}

export default Outerhome