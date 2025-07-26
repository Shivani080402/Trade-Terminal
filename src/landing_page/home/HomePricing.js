import React from 'react';

function HomePricing() {
    return (  
       <div className='container mb-5'>

        <div className='row'>
            <div className='col-4'>
                <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                 <a href='/'  style={{textDecoration : "none"}}>See pricing</a>
            </div>
            <div className='col-2'></div>
            <div className='col-6 mb-4'>
                <div className='row text-center'>
                    <div className='col p-3 '>
                        <div className='row text-center'>
                            <img src='media\Images\pricing-value.svg' alt='price_vale' style={{width : "70%"}} />
                             <p className=''> Free account opening</p>
                             </div>
                         
                      
                    </div>
                    <div className='col p-3 '>
                        <img src='media\Images\pricing-value.svg' alt='price_vale' style={{width : "70%"}} />
                        <p> Free equity delivery
and direct mutual funds</p>
                    </div>
                    <div className='col p-3 '>
                        <img src='media\Images\pricing-value-20.svg' alt='price_vale' style={{width : "70%"}} />
                        <p> Free account opening</p>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
}

export default HomePricing;