import React, { useContext, useState } from 'react';
import { AcContext } from './acContext';


function Forgot() {  
  const {switSignup} =useContext(AcContext);
  const [mailid,setMailid]=useState("");

  function sendResetHash(){

    if (mailid){
      
      ( async ()=>{
        const resp = await fetch("http://127.0.0.1/api/forgot/?mail="+mailid,{
          method:"GET",
          headers:{
            "Content-Type": "application/json" ,
            "Accept": "application/json" ,
          },
        });
        const res=await resp.json();
        if (resp.status===200){
          alert(res.message);
        }
        else{
          alert(resp.statusText);
        }


      })();

    }

  }

  return <>
    <div className='container'>
    <div className='card'>
    <h4 className="card-title">Enter your email</h4>
        
            <input type="email" name="email" onChange={(e)=>setMailid(e.target.value)} /><br/>
            <button type='submit' onClick={sendResetHash} >Send reset link</button>
        
        <br/>
        <a href='#'  onClick={switSignup}>Signup here</a>

    </div>
    </div>
  </>
}

export default Forgot;