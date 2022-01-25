

import React from 'react';

function Resetpass() {
  return <>
    <div className='card'>
        <form method='post' action="api..">
            <input type="email" name="email" /><br/>
            <button type='submit'>Send reset link</button>
        </form>

    </div>
  </>
}

export default Resetpass;