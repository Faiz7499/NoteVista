import React from 'react';
import noteContext from './notecontext';
import { useState } from 'react';

function Notestate(props) {
  // {"_id": "64d69067de8622013537f"
  //     ,
  //       "user": "64d649fcfe73bb0ee1e99471"
  //      ,
  //       "title": "Wake Up",
  //       "discription": "i want to wake up at 7pm",
  //       "tag": "nothing",
  //       "date": "1691772263716",
  //       "__v": 0
  //     }
  const host='http://localhost:5000';
 
      const [notess, setnotess] = useState([]);
      const [alert,setalert]=useState(null);


        

  const getnote= async ()=>{
  const responce=await fetch(`${host}/notes/getnotes`,{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'auth-token':localStorage.getItem('token')
      }

    });
     
     const note=await responce.json();
    
     setnotess(note);
  }

  const addnotee=async (title,discription,tag)=>{
    const responce=await fetch(`${host}/notes/addnotes`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'auth-token':localStorage.getItem('token')
      },
      body: JSON.stringify({ title, discription, tag })
    });
  
  
  }


  const [detail,setdetail]=useState([]);

  const detailsss=async ()=>{
    
    const responce=await fetch('http://localhost:5000/auth/getdetail',{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'auth-token':localStorage.getItem('token')}
    })
    let a=await responce.json();
    setdetail(a);
   }


      // const addnotee=(title,discription,tag)=>{
      //   console.log("bb")
      //  let notee={
      //     "_id":"64d667de86282907f"
      //     ,
      //     "user": "64d649cfe73bbe1e99471",
          
      //     "title": title,
      //     "discription":discription,
      //     "tag":tag ,
      //     "date": "11772263716",
      //     "__v": 0
      //   }  
      //   setnotess(notess.concat(notee));
      // }

      

    
        const deletenote= async(id)=>{
          const responce=await fetch(`${host}/notes/delete/${id}`,{
            method:'DELETE',
            headers:{
              'Content-Type':'application/json',
              'auth-token':localStorage.getItem('token')
            }
            });
        }


        const updatenote=async(id,title,discription,tag)=>{
          console.log(id,title,discription,tag);
          const responce=await fetch(`${host}/notes/updatenote/${id}`,{
            method:"PUT",
            headers:{
              'Content-Type':'application/json',
              'auth-token':localStorage.getItem('token')
            },
            body:JSON.stringify({title,discription,tag})
          });
        }

  return (
    <noteContext.Provider value={{notess,getnote,addnotee,deletenote,updatenote,alert,setalert,detailsss,detail}}>
    {props.children}
 </noteContext.Provider>
  )
}

export default Notestate;