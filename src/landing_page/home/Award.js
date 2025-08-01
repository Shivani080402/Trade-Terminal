import React from 'react';

function Award() {
    return ( 
        <div className='container mt-5'>
            <div className='row' >
                <div className='col-6 p-5'>
                    <img src='media/Images/largestBroker.svg' alt='largest-broker' />
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ Million Trade-Terminal Client contribute to over 15% of all volumns in India daily by trading and investing in : </p>
                    <div className='row'>
                        <div className='col-6'>
                             <ul>
                        <li><p>Futures and Options</p></li>
                        <li><p>Comodity derivatives</p></li>
                        <li><p>Currency derivatives</p></li>
                        
                    </ul>
                        </div>
                         <div className='col-6'>
                             <ul>
                        <li><p>Stocks & IPOs</p></li>
                        <li><p>Direct mutual funds</p></li>
                        <li><p>Bonds and Govt. Securities</p></li>
                        
                    </ul>
                        </div>
                   
                </div>
                <img src='media\Images\pressLogos.png' alt='press-logo' style={{width : "90%"}}/>
                </div>
            </div>

        </div>
     );
}

export default Award;