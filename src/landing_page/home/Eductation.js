import React from 'react';


function Education() {
    return ( 
          <div className='container mb-5'>

        <div className='row'>
            <div className='col-6'>
                <img src='media\Images\education.svg' alt='eductaion' style={{width : "75%"}} />
            </div>
            
            <div className='col-6 mt-5 '>
               <h1 className='mb-2 fs-2'>Free and open market education</h1>
                <p className='mt-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                 <a href='/'  style={{textDecoration : "none"}}>Varsity</a>
                 
                <p className='mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                 <a href='/'  style={{textDecoration : "none"}}>TradingQ&A</a>
            </div>
        </div>
       </div>
     );
}

export default Education;