import React from 'react';
import Allnotess from './allnote';
import Addnote from './addnote';
function Home() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 col-md-6 col-sm-12 '>
        <Addnote/>
      
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12  '>
        
      <Allnotess/>
        </div>
      </div>
    </div>

  )
}

export default Home;