import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navb() {
  
  const navigate=useNavigate();
  const loacation=useLocation();
   const handlelogout=()=>{
    localStorage.removeItem('token');
    navigate('/login');
   }
   const handlelprofile=()=>{
    navigate('/profile')
   }
   const handelenote = () => {
    navigate('/note');
  }
   
  useEffect(()=>{
   console.log(loacation.pathname)
  },[loacation])

  return (
<div className='ournav'  >
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link className="navbar-brand" to="/">NoteVista</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link
              // eslint-disable-next-line no-restricted-globals
              className={`nav-link ${location.pathname === '/' ? 'active' : ' '}`}
              aria-current="page"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
               // eslint-disable-next-line no-restricted-globals
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-disabled="true">
              Contact Us
            </Link>
          </li>
        </ul>
  
        {!localStorage.getItem('token') ? (
          <form className="d-flex" role="search">
            <Link
              className="btn btndss  mx-1"
              to="/login"
              tabIndex="-1"
              role="button"
              aria-disabled="true"
            >
              Login
            </Link>
            <Link
              className="btn btndss  mx-1"
              to="/signup"
              tabIndex="-1"
              role="button"
              aria-disabled="true"
            >
              SignUp
            </Link>
          </form>
        ) : (
          <div>
             <button className="btn btndss mx-2" style={{width:'100px'}} onClick={handelenote}>
             Your Notes
            </button>
            <button className="btn btndss  mx-2" onClick={handlelprofile}>
              Profile
            </button>
            <button className="btn btndss mx-2" onClick={handlelogout}>
              Logout
            </button>
            
          
          </div>
        )}
      </div>
    </div>
  </nav>
</div>
  
  )
}

export default Navb