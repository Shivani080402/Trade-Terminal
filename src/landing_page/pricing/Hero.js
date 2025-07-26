import React from 'react';


function Hero() {
    return (  
        <div className='container mt-5 '>
            <div className='row text-center'>
                <h1 className='mt-5'>Charges</h1>
                <p className='mt-2 text-muted fs-5 mb-5'>List of all charges and taxes</p>

               <div className='row text-center mt-5 mb-5'>
                    <div className='col p-3 '>
                        <div className='row text-center'>
                            <img src='media\Images\pricing-value.svg' alt='price_vale' style={{width : "60%" , marginLeft : "20%" , marginTop : "20%"}} className='text-center' />
                             <h1 className='fs-3'>Free equity delivery</h1>
                             <p className='text-muted' style={{lineHeight : '1.8'}}> All equity delivery investments (NSE, BSE), <br />are absolutely free — ₹ 0 brokerage.</p>
                             </div>
                         
                      
                    </div>
                    <div className='col p-3 text-center'>
                        <img className="text-center" src='media\Images\pricing-value-20.svg' alt='price_vale' style={{width : "60%" , marginTop : "20%"}} />
                        <h1 className='fs-3 text-center'>Intraday and F&O trades</h1>
                        <p lassName='text-muted' style={{lineHeight : '1.8'}}> Flat ₹ 20 or 0.03% (whichever is lower) per <br />executed order on intraday trades across <br />equity, currency, and commodity trades. Flat <br/>₹20 on all option trades.</p>
                    </div>
                    <div className='col p-3 '>
                        <img src='media\Images\pricing-value.svg' alt='price_vale' style={{width : "60%" ,  marginTop : "20%"}} />
                        <h1 className='fs-3'>Free direct MF</h1>
                        <p  lassName='text-muted' style={{lineHeight : '1.8'}}> All direct mutual fund investments are <br />absolutely free — ₹ 0 commissions & DP <br />charges.</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Hero;