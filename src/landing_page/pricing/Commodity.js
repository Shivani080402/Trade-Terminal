import React from 'react';
import Hero from './Hero';
import EquityPage from './EquityPage';
import Brokerage from './Brokerage';
import Charges from './Charges';

function Commodity() {
    return ( 
           <>
       
           
       <div className='container'>
            <div className='row mb-5'>

<table className="border ">
  <thead className='border '>
    <tr className='text-muted'>
      <th scope="col" ></th>
      <th scope="col" className='p-3 m-3'>Commodity futures</th>
      <th scope="col">Commodity options</th>
    
    </tr>
  </thead>
  <tbody>
    <tr className='text-muted'>
      <th scope="row" className='p-3 m-3'>Brokerage</th>
      <td className='p-3 m-3'>0.03% or Rs. 20/executed order whichever is lower</td>
      <td className='p-3 m-3'>₹ 20/executed order</td>
     
    </tr>
    <tr className='text-muted'>
      <th scope="row" className='p-3 m-3'>STT/CTT</th>
      <td className='p-3 m-3'>0.01% on sell side (Non-Agri)</td>
      <td>0.05% on sell side</td>
 
    </tr>
    <tr className='text-muted'>
      <th scope="row" className='p-3 m-3'>Transaction charges</th>
      <td className='p-3 m-3'>MCX: 0.0021%<br/>
NSE: 0.0001%</td>
      <td>MCX: 0.0418%<br/>
NSE: 0.001%</td>
    </tr>
     <tr className='text-muted'>
      <th scope="row" className='p-3 m-3'>GST</th>
      <td className='p-3 m-3'>18% on (brokerage + SEBI charges + transaction charges)</td>
      <td>18% on (brokerage + SEBI charges + transaction charges)</td>
    </tr>
     <tr className='text-muted'>
      <th scope="row" className='p-3 m-3'>SEBI charges</th>
      <td className='p-3 m-3'>Agri:<br/>₹1 / crore<br/>Non-agri:<br/>₹10 / crore</td>
      <td>₹10 / crore</td>
    </tr>
     <tr className='text-muted'>
      <th scope="row" className='p-3 m-3'>Stamp charges</th>
      <td className='p-3 m-3'>0.002% or ₹200 / crore on buy side</td>
      <td>0.003% or ₹300 / crore on buy side</td>
    </tr>
  </tbody>
</table>

            </div>
            </div>
           
        </>
     );
}

export default Commodity;