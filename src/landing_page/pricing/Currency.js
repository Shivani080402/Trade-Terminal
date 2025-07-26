import React from 'react';
import { Link } from 'react-router-dom';
import Brokerage from './Brokerage';
import Charges from './Charges';
import EquityPage from './EquityPage';
import Hero from './Hero';

function Currency() {
    return ( 
        <>
       
           
       <div className='container'>
            <div className='row mb-5'>

<table className="border ">
  <thead className='border '>
    <tr className='text-muted'>
      <th scope="col" ></th>
      <th scope="col" className='p-3 m-3'>Currency futures</th>
      <th scope="col">Currency options</th>
    
    </tr>
  </thead>
  <tbody>
    <tr className='text-muted'>
      <th scope="row" className='p-3 m-3'>Brokerage</th>
      <td className='p-3 m-3'>0.03% or ₹ 20/executed order whichever is lower</td>
      <td className='p-3 m-3'>₹ 20/executed order</td>
     
    </tr>
    <tr className='text-muted'>
      <th scope="row" className='p-3 m-3'>STT/CTT</th>
      <td className='p-3 m-3'>No STT</td>
      <td>No STT</td>
 
    </tr>
    <tr className='text-muted'>
      <th scope="row" className='p-3 m-3'>Transaction charges</th>
      <td className='p-3 m-3'>NSE: 0.00035%<br/>
BSE: 0.00045%</td>
      <td>NSE: 0.0311%<br/>
BSE: 0.001%</td>
    </tr>
     <tr className='text-muted'>
      <th scope="row" className='p-3 m-3'>GST</th>
      <td className='p-3 m-3'>18% on (brokerage + SEBI charges + transaction charges)</td>
      <td>18% on (brokerage + SEBI charges + transaction charges)</td>
    </tr>
     <tr className='text-muted'>
      <th scope="row" className='p-3 m-3'>SEBI charges</th>
      <td className='p-3 m-3'>₹10 / crore</td>
      <td>₹10 / crore</td>
    </tr>
     <tr className='text-muted'>
      <th scope="row" className='p-3 m-3'>Stamp charges</th>
      <td className='p-3 m-3'>0.0001% or ₹10 / crore on buy side</td>
      <td>0.0001% or ₹10 / crore on buy side</td>
    </tr>
  </tbody>
</table>

            </div>
            </div>
           
        </>
     
     );
}

export default Currency;