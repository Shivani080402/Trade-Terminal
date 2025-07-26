import React from 'react';
import { Link } from "react-router-dom";


function OpenAccount() {
    return (  
         <div className='container p-5 mb-5 '>
        <div className='row text-center'>
        <h1 className=' fs-1'>Open a Trade-Terminal account</h1>
        <p className='fs-5 p-3 '>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
        <Link to={"/signup"}><button className='p-2 btn btn-primary fs-5  ' style={{width : '20%' ,backgroundColor:"#162d5b" , border :'1px solid #162d5b' , margin : "0 auto"}}>Sign up for free</button></Link>
         </div>
       </div>
    );
}

export default OpenAccount;