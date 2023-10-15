import React from 'react';
import noteContext from '../context/notecontext';
import { useContext } from 'react';

function Alert() {
    const a=useContext(noteContext);
    const {alert,setalert}=a;
    
    const handelclick=()=>{
      setalert(null);
    }
  return (
    alert  &&  <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
  <strong> {alert.ti}</strong> {alert.message}
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={handelclick}></button>
</div>    
  )
}

export default Alert
