import React, { useContext, useState } from 'react';
import { AcContext } from './acContext';

function Signup() {
    const {switLogin} = useContext(AcContext);
    const [username,setUname]=useState("");
    const [email,setMailid]=useState("");
    const [password,setPass]=useState("");

    function register(){
      // console.log(password);
      let item = {username,password,email};
      // alert(JSON.stringify(item));
      
      if (username && password && email){
        (async ()=>{
      
          const resp = await fetch("http://127.0.0.1/api/register2/",{
            method:"POST",
            headers:{
              "Content-Type": "application/json" ,
              "Accept": "application/json" ,
            },
            body:JSON.stringify(item)
          });
        
          const res=await resp.json();
        
          if(resp.status===200){
            alert("ok");
            // localStorage.setItem('user-info',JSON.stringify(res));
            // history("/home");
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
                <h4 className="card-title">Signup</h4>
                
                
                <input type="email"  placeholder='Email' name='email' onChange={(e)=>setMailid(e.target.value)} required/>
                <input type="text" placeholder='Esername' name='username' onChange={(e)=>setUname(e.target.value)} required/>
                <input type="text" placeholder='Password..' name='password' onChange={(e)=>setPass(e.target.value)} required/>
                    <br/><button type='submit' className='btn btn-info' onClick={register} >Signup</button>
                
                
              </div>
            </div>
        </div>
        <a href='#'  onClick={switLogin}>Change to Login</a>
    </div>
  </>
}

export default Signup;
