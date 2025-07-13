import React from 'react';


function Hero() {
    return ( 
       <div className='container p-5 mb-5 '>
        <div className='row text-center'>
            <div>
           <img src = 'media/Images/homeHero.png' alt='Hero-Image' className='mb-5' style={{width : '60%' }} />
        </div>
        <h1 className='mt-5 fs-1'>Invest in everything</h1>
        <p className='fs-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width : '20%' , margin : "0 auto"}}>Sign up for free</button>
         </div>
       </div>
     );
}

export default Hero;