import React from 'react';
import { Link } from 'react-router-dom';
import Currency from './Currency';
import Hero from './Hero';
import EquityPage from './EquityPage';
import Brokerage from './Brokerage';
import Charges from './Charges';

function Equity() {
    return ( 
        <>
       
           
       <div className='container'>
            <div className='row mb-5'>

<table className="border ">
  <thead className='border '>
    <tr className='text-muted'>
      <th scope="col" ></th>
      <th scope="col" className='p-3 m-3'>Equity delivery</th>
      <th scope="col">Equity intraday</th>
      <th scope="col">F&O - Futures</th>
      <th scope="col">F&O - Options</th>
    </tr>
  </thead>
  <tbody>
    <tr className='text-muted'>
      <th scope="row" className='p-3 m-3'>Brokerage</th>
      <td className='p-3 m-3'>Zero Brokerage</td>
      <td className='p-3 m-3'>0.03% or Rs. 20/executed order whichever is lower</td>
      <td className='p-3 m-3'>0.03% or Rs. 20/executed order whichever is lower</td>
      <td className='p-3 m-3'>Flat Rs. 20 per executed order</td>
    </tr>
    <tr className='text-muted'>
      <th scope="row" className='p-3 m-3'>STT/CTT</th>
      <td className='p-3 m-3'>0.1% on buy & sell</td>
      <td>0.025% on the sell side</td>
      <td>0.02% on the sell side</td>
      <td><ul>
            <li>0.125% of the intrinsic value on options that are bought and exercised</li>
            <li>0.1% on sell side (on premium)</li>
        </ul></td>
    </tr>
    <tr className='text-muted'>
      <th scope="row" className='p-3 m-3'>Transaction charges</th>
      <td className='p-3 m-3'>NSE: 0.00297%<br/>
BSE: 0.00375%</td>
      <td>NSE: 0.00297%<br/>
BSE: 0.00375%</td>
      <td>NSE: 0.00173%<br/>
BSE: 0</td>
      <td>NSE: 0.03503% (on premium)<br/>
BSE: 0.0325% (on premium)</td>
    </tr>
     <tr className='text-muted'>
      <th scope="row" className='p-3 m-3'>GST</th>
      <td className='p-3 m-3'>18% on (brokerage + SEBI charges + transaction charges)</td>
      <td>18% on (brokerage + SEBI charges + transaction charges)</td>
      <td>18% on (brokerage + SEBI charges + transaction charges)</td>
      <td>18% on (brokerage + SEBI charges + transaction charges)</td>
    </tr>
     <tr className='text-muted'>
      <th scope="row" className='p-3 m-3'>SEBI charges</th>
      <td className='p-3 m-3'>₹10 / crore</td>
      <td>₹10 / crore</td>
      <td>₹10 / crore</td>
      <td>₹10 / crore</td>
    </tr>
     <tr className='text-muted'>
      <th scope="row" className='p-3 m-3'>Stamp charges</th>
      <td className='p-3 m-3'>0.015% or ₹1500 / crore on buy side</td>
      <td>0.003% or ₹300 / crore on buy side</td>
      <td>0.002% or ₹200 / crore on buy side</td>
      <td>0.003% or ₹300 / crore on buy side</td>
    </tr>
  </tbody>
</table>

            </div>
            </div>
           
        </>
     );
}

export default Equity;