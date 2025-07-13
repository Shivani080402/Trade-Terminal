import React from 'react';

function Team() {
    return ( 
       <div className="container">
      <div className="row  mb-5 ">
        <h1 className="fs-1 text-center">
          People
        </h1>
      </div>

      <div className="row text-muted" style={{lineHeight : "1.8" , fontSize : "17px"}}>
        <div className="col-6 p-5 text-center">
        <img src='media/Images/nithinKamath.jpg' alt='myimage' style={{borderRadius : "100%" , width : '50%' }}/>
        <h5 className='mt-3'>Nithin Kamath</h5>
        <h6 >Founder, CEO</h6>
        </div>
        <div className="col-6 p-5 ">
          <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

<p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

<p>Playing basketball is his zen.</p>

<p>Connect on <a href='/' style={{textDecoration : "none"}}> Homepage </a>/ <a href='/' style={{textDecoration : "none"}}>TradingQnA </a> / <a href='/' style={{textDecoration : "none"}}> Twitter </a></p>
        </div>
      </div>
      <div className='row mb-5'>
        <div className="col-4 p-2 text-center">
        <img src='media/Images/Nikhil.jpg' alt='myimage' style={{borderRadius : "100%" , width : '55%' }}/>
        <h5 className='mt-3'>Nikhil Kamath</h5>
        <h6 >Co-founder & CFO</h6>
        </div>
         <div className="col-4 p-2 text-center">
        <img src='media/Images/Kailash.jpg' alt='myimage' style={{borderRadius : "100%" , width : '55%' }}/>
        <h5 className='mt-3'>Dr. Kailash Nadh</h5>
        <h6 >CTO</h6>
        </div>
         <div className="col-4 p-2 text-center">
        <img src='media/Images/Venu.jpg' alt='myimage' style={{borderRadius : "100%" , width : '55%' }}/>
        <h5 className='mt-3'>Venu Madhav</h5>
        <h6 >COO</h6>
        </div>

      </div>
      
      <div className='row mb-5'>
        <div className="col-4 p-2 text-center">
        <img src='media/Images/Hanan.jpg' alt='myimage' style={{borderRadius : "100%" , width : '55%' }}/>
        <h5 className='mt-3'>Hanan Delvi</h5>
        <h6 >CCO</h6>
        </div>
         <div className="col-4 p-2 text-center">
        <img src='media/Images/Seema.jpg' alt='myimage' style={{borderRadius : "100%" , width : '55%' }}/>
        <h5 className='mt-3'>Seema Patil</h5>
        <h6 >Director</h6>
        </div>
         <div className="col-4 p-2 text-center">
        <img src='media/Images/karthik.jpg' alt='myimage' style={{borderRadius : "100%" , width : '55%' }}/>
        <h5 className='mt-3'>Karthik Rangappa</h5>
        <h6 >Chief of Education</h6>
        </div>

      </div>
        <div className='row mb-5'>
        <div className="col-4 p-2 text-center">
        <img src='media/Images/Austin.jpg' alt='myimage' style={{borderRadius : "100%" , width : '55%' }}/>
        <h5 className='mt-3'>Austin Prakesh</h5>
        <h6 >Director Strategy</h6>
        </div>

      </div>
    
    </div>
     );
}

export default Team;