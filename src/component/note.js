import React, { useContext, useState } from 'react';
import noteContext from '../context/notecontext';

function Note(props) {
  const a = useContext(noteContext);
  const { deletenote } = a;
  const { note, updatenote } = props;



  return (



    <div className='col-lg-6 mt-3 '>

      <div className="card notestr" style={{ "width": "15rem" }}>
        <div className="card-body">
          <div className='d-flex align-items-center justify-content-between'>
            <h5 className="card-title">{note.title}</h5>
            <i className="fa-solid fa-pen-to-square " data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { updatenote(note) }}></i>
            <i className="fa-solid fa-trash" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => {
              props.deletenoteeee(note._id)
            }}></i>
          </div>
          <h6 className="card-subtitle mb-2 text-body-secondary">{note.tag}</h6>
          <p className="card-text">{note.discription}</p>
        </div>
      </div>

    </div>
  )
}

export default Note;