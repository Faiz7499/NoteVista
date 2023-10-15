import React from 'react'

function Blogstrp(props) {
    const {blog,deleteblogeee}=props;
    return (
       
         
            <div className='col-lg-3 col-md-4 col-sm-6 col'>
            <div className="card " style={{width:'10rem'}} >
                <div className="card-body">
               
                    <h5 className="card-title">{blog.heading} </h5>
                   
                    <p className="card-text">{blog.discription}.</p>
                    <h6 className="card-title">{blog.username}</h6>
                    <i className="fa-solid fa-trash" data-bs-toggle="modal" data-bs-target="#staticBackdrop"  onClick={() => {
                    deleteblogeee(blog._id)
            }}></i>
                </div>
            </div>
            </div>
         
      
    )
}

export default Blogstrp
