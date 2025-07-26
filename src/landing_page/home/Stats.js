import React from 'react';


function Stats() {
    return ( 
       <div className='container p-3 mb-5'>
        <div className='row p-3 mb-3'>
            <div className='col-6 p-3'>
                <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                <h2 className='fs-4 mb-3'>Customer-first always</h2>
                <p className='text-muted'>That's why 1.6+ crore customers trust Trade-Terminal with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                
                <h2 className='fs-4 mb-3'>No spam or gimmicks</h2>
                <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>

                <h2 className='fs-4 mb-3'>The Trade-Terminal universe</h2>
                <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                <h2 className='fs-4 mb-3'>Do better with money</h2>
                <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

            </div>
            <div className='col-6'>
                <img src='media\Images\ecosystem.png' alt= "eco_image" style={{width : "90%"}} />
                <div className='text-center'>
                    <a href='/' className='mx-5' style={{textDecoration : "none"}}>Explore our products</a>
                    <a href='/' className='mx-5' style={{textDecoration : "none"}}>Try Kite demo</a>
                </div>
            </div>

        </div>
        <div className='row mb-5 '>
            <img src='media\Images\pressLogos.png' alt='presslogo' style={{width : "60%" , margin : "0 auto"}}/>
        </div>
       </div>
     );
}

export default Stats;