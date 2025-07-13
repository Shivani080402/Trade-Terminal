import React from 'react';


function NotFound() {
    return ( 

         <div className='container p-5 mb-5 '>
        <div className='row text-center'>
        <h1 className=' fs-1 ' style={{color : "red"}}>404 ! NOT FOUND </h1>
        <p className='fs-5 p-3 '>Sorry ! The Page you are looking for does not exist.</p>
         </div>
       </div>
     );
}

export default NotFound;