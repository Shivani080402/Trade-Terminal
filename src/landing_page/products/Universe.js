import React from 'react';

function Universe() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row text-center '>
                <h1 className='mb-3'>The Zerodha Universe</h1>
               <p className='mb-5 text-muted'>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='row text-center mt-5 mb-5 text-muted'>
                <div className='col-4 '>
                    <img src= "media/Images/zerodhaFundhouse.png"  style={{width : '50%'}}/>
                    <p className='mt-4'>Our asset management venture <br/> that is creating simple and transparent index <br/>funds to help you save for your goals.</p>
                </div>
                 <div className='col-4'>
                    <img src= "media/Images/sensibullLogo.svg"  style={{width : '50%' , padding : "5px"}}/>
                    <p className='mt-4'>Options trading platform that lets you  <br/> create strategies, analyze positions, and examine  <br/>data points like open interest, FII/DII, and more.</p>
              
                </div>
                 <div className='col-4'>
                    <img src= "media/Images/tijori.svg"  style={{width : '40%'}}/>
                    <p className='mt-3'>Investment research platform   <br/> that offers detailed insights on stocks,   <br/>sectors, supply chains, and more.</p>
              
                </div>

            </div>
             <div className='row text-center mb-5 text-muted'>
                <div className='col-4 '>
                    <img src= "media/Images/streakLogo.png"  style={{width : '50%'}}/>
                    <p className='mt-4'>Systematic trading platform  <br/> that allows you to create and backtest  <br/>strategies without coding.</p>
                </div>
                 <div className='col-4'>
                    <img src= "media/Images/smallcaseLogo.png"  style={{width : '50%' , padding : "5px"}}/>
                    <p className='mt-4'>Thematic investing platform   <br/> that helps you invest in diversified   <br/>baskets of stocks on ETFs.</p>
              
                </div>
                 <div className='col-4'>
                    <img src= "media/Images/dittoLogo.png"  style={{width : '40%'}}/>
                    <p className='mt-3'>Personalized advice on life   <br/> and health insurance. No spam    <br/>and no mis-selling.</p>
              
                </div>

            </div>
            <div className='row text-center'>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width : '20%' , margin : "0 auto"}}>Sign up for free</button>
            </div>
            

        </div>
     );
}

export default Universe;