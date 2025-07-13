import React from 'react';

function Hero() {
    return ( 
        <div  style={{backgroundColor  :'#387ed1' , color :'white' }}>
            <div className='row mb-5 ' style={{paddingLeft : '12%' , paddingRight : "12%"}} >
                <div className='col-2'>
                    <h4 className='mt-5'>Support Portal</h4>
                </div>
                <div className='col-8'>
                    
                </div>
                  <div className='col-2 mt-5'>
                    <a href='/' style={{color : 'white' , fontSize : '16px' , marginBottom : '2px'}}>Track tickets</a>
                  </div>
                
            </div>
            <div className='row' style={{paddingLeft : '12%' , paddingRight : "12%"}}>
                <div className='col-6 mb-5'>
                    <h5 className='mb-5 fs-4'>Search for an answer or browse help topics to create a ticket</h5>
                    <input placeholder='Eg: how do i activate F&O, why is my order getting rejected ...' className='mb-3 p-3' style={{width : '100%' , border : 'none' , borderRadius : '10px' , fontSize : '16px'}} />
                    <div className='mb-2'>
                   <a href='/' style={{padding : '5px' ,color:'white' , fontSize :'17px' , marginRight : '5px' }}> Track account opening</a>
                    <a href='/' style={{color:'white' ,fontSize :'17px' , marginRight : '5px'}}><span>Track segment activation</span></a>
                    <a href='/' style={{color:'white' ,fontSize :'17px' , marginRight : '5px'}}> <span>Intraday margins</span></a>
                    </div>
                    <div className='mb-5'>
                        <a href= '/' style={{color:'white' ,fontSize :'17px' , marginRight : '5px'}}>Kite user manual</a>
                    </div>
                </div>
                 <div className='col-6'>
                    <h4 className='mt-4'>Featured</h4>
                    <ol>
                       <li className='mb-4 '> <a href='/' style={{color : 'white' , fontSize : '18px' }}>Quarterly Settlement of Funds - July 2025</a></li>
 
<li className='mb-4 '><a href='/' style={{color : 'white' ,fontSize : '18px'}}>Exclusion of F&O contracts on 8 securities from <br />August 29, 2025</a></li>
                    </ol>
                 </div>

            </div>

        </div>
     );
}

export default Hero;