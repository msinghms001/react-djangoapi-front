import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const name= JSON.parse(localStorage.getItem('user-info'));
    const history=useNavigate();
    function Logout(){

        
            localStorage.clear();
        
            history('/');


    }


  return <div>
      <button className='btn btn-danger' onClick={Logout}>Logout..</button>
  </div>;
}

export default Logout;
