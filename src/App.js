import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import { Fragment, useEffect,useState } from 'react';

import Login from './Components/Login';
import Signup from './Components/Signup';
import { AcContext } from './Components/acContext';
import Forgot from './Components/forgot';
import Home from './Components/home';
import Label from './Components/Title';


const Flow=()=>{

  const [active,changeActive] =useState('login');

  const switSignup=()=>{
    changeActive("signup");
  
  }
  
  const switLogin=()=>{
    changeActive("login");
  }

  const switForgot=()=>{
    changeActive("forgot");
  }
  
const contextValue={switLogin,switSignup,switForgot};
return(
  <>
  <AcContext.Provider value={contextValue}>
    <Label/>
  {active==="signup" && <Signup/>}
  {active==="login" && <Login/>}
  {active==="forgot" && <Forgot/>}
  </AcContext.Provider>
  </>
  )
};


function App() {
  return (
    <Fragment >
      <Routes>
      <Route element={<Flow/>} path="/" />
      {/* <Route element={<Signup/>} path="/make" /> */}
      <Route element={<Home/>} path="/home" />
      </Routes>
    </Fragment>
  );
}

export default App;
