import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navb from './component/navbar';
import About from './component/about';
import Home from './component/home';
import Notestate from './context/notestate';
import Alert from './component/alert';
import Login from './component/login';
import Signup from './component/signup';
import Outerhome from './component/outerhome';
import Blogstate from './context/blogstate';
import Profile from './component/profile';
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';
import Singleblgstr from './component/singleblgstr';


function App() {
  const [progress,steprogress]=useState(0);
  function setnn(progress){
    steprogress(progress);
  }
  return (
    <div className="">
     <Notestate>
      <Blogstate>
      <LoadingBar
        color='aqua'
        progress={progress}
   
      />
     <Router>
       <LoadingBar
         height={4}
         color='aqua'
         progress={progress}
       />

          <Navb />

          <Alert />
          <Routes><Route path="/"  element={<Outerhome  setn={setnn} />} > 

           </Route></Routes>
           <Routes><Route path="/profile" element={<Profile setn={setnn}  />} > 
              </Route></Routes>
              <Routes><Route path="/single" element={<Singleblgstr setn={setnn}  />} > 
              </Route></Routes>
           <Routes><Route path="/note" element={<Home setn={setnn} />} > 

          </Route></Routes>
          <Routes><Route path="/about" element={<About setn={setnn} />} >
          </Route></Routes>
          <Routes><Route path="/login" element={<Login setn={setnn} />} >
          </Route></Routes>
          <Routes><Route path="/signup" element={<Signup setn={setnn} />} >
          </Route></Routes>
        </Router>
        </Blogstate>
     </Notestate>
    </div>
  );
}

export default App;
