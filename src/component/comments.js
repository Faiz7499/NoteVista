import React from 'react'

function Comments(props) {
    const {cmnt}=props;
    const daa=new Date(cmnt.datee);
    console.log(daa.toLocaleString());
 
  return (
    <div className='cmntstr' style={{width:'30%',margin:'auto',lineHeight:'6px',paddingTop:'10px',marginTop:'10px'}}>
   
         
       
         <div className='row'>
         <div className='col-6'>
         <p style={{fontFamily:'revert',fontWeight:500,fontSize:"15px"}}>@{cmnt.username}</p>
            </div>
            <div className='col-6'>
            <p style={{textAlign:'right',paddingRight:'10px'}}>{daa.toLocaleDateString()}</p>
            </div>
         </div>
         <p style={{fontSize:"13px"}}>{cmnt.comment}...</p>
    </div>
  )
}

export default Comments