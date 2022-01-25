import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AcContext } from './acContext';


function Login() {
  const {switSignup} = useContext(AcContext);
  const {switForgot} = useContext(AcContext);
  const [username,setUname]=useState();
  const [password,setPass]=useState();

const history= useNavigate();
  useEffect(()=>{
    if (localStorage.getItem('user-info')){
      history('/home');
      
    }

    // console.log(username);

  },[]);

  function login(){
// console.log(password);
let item = {username,password};

if (username && password){
  (async ()=>{

    const resp = await fetch("https://jwtprojms.pythonanywhere.com/api/tokenLogin/",{
      method:"POST",
      headers:{
        "Content-Type": "application/json" ,
        "Accept": "application/json" ,
      },
      body:JSON.stringify(item)
    });
  
    const res=await resp.json();
  
    if(resp.status===200){
      
      localStorage.setItem('user-info',JSON.stringify(res));
      history("/home");
    }
    else if(res.detail){
      alert(res.detail);
    }
    else{
      alert(resp.statusText);
    }
  
    
  
  
  })();
    
}
else{
  alert('info needed');
}


}


  return <>
    <div className='container'>
        <div className='card'>
            <div className="card text-left">
              {/* <img className="card-img-top" src="holder.js/100px180/" alt=""/> */}
              <div className="card-body">
                <h4 className="card-title">Login</h4>
                
                
                <input required type="text" placeholder='usern' name='username' onChange={(e)=>setUname(e.target.value)} />
                <input required type="password" placeholder='password..' name='password' onChange={(e)=>setPass(e.target.value)} />
                <br/>  <button type='submit' className='btn btn-info' onClick={login} >Login</button>
                
                
                <br/>
                <a href='#'  onClick={switForgot}>Forgot password?</a><br/>
                
              </div>
            </div>
        </div>
        
        <a href='#'  onClick={switSignup}>Signup here</a>
    </div>
  </>
}

export default Login;
