import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logout from './Logout';

function Home() {
    const history=useNavigate();
    const data=JSON.parse(localStorage.getItem('user-info'));
    useEffect(()=>{
        if(data){
            let access_token=data.access;

            (async()=>{
                const serv=await fetch("http://127.0.0.1/api/",{
                    method:"GET",
                    headers:{
                        "Content-Type": "application/json" ,
                        "Authorization":"Bearer "+access_token
                    }

                });
                const parsed_res=await serv.json();
                alert(parsed_res.message);

            })();

            // alert("token: "+data.access)

        }
        else{
            history("/");
        }


    });


  return <div className='card'>
      
      <h1>Welcome , You are logged in!</h1>
      <Logout/>
  </div>;
}

export default Home;
