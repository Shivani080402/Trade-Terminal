import React from 'react';

function Charges() {
    return ( 
        <div className='container'>
            <div className='row mb-5'>
              <h1 className='fs-3 mb-4'>Charges for account opening</h1>
                <table className="border " >
  <thead className='border '>
    <tr>
      <th scope="col" className='p-3 m-3'>Type of account</th>
      <th scope="col">Charges</th>
    </tr>
  </thead>
  <tbody  >
    <tr >
    
      <td className='p-3 m-3'>Online account</td>
      <td ><span className='p-1 '  style={{backgroundColor : '#4caf50' , color : "white" ,  borderRadius : '2px' }}>FREE</span></td>
    
    </tr>
    <tr>
      
      <td className='p-3 m-3'>Offline account</td>
      <td > <span className='p-1 '  style={{backgroundColor : '#4caf50' , color : "white" ,  borderRadius : '2px' }}>FREE</span></td>
    
    </tr>
    <tr>
      <td className='p-3 m-3'>NRI account (offline only)</td>
      <td>₹ 500</td>
    </tr>
    <tr>
      <td className='p-3 m-3'>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
      <td>₹ 500</td>
    </tr>
  </tbody>
</table>

            </div>

              <div className='row mb-5'>
              <h1 className='fs-3 mb-4'>Charges for optional value added services</h1>
                <table className="border " >
  <thead className='border '>
    <tr>
      <th scope="col" className='p-3 m-3'>Service</th>
      <th scope="col">Billing Frquency</th>
       <th scope="col">Charges</th>
    </tr>
  </thead>
  <tbody  >
    <tr >
    
      <td className='p-3 m-3'>Tickertape</td>
      <td className='p-3 m-3'>Monthly / Annual</td>
      <td className='p-3 m-3'>Free: 0 | Pro: 249/2399</td>
     
    
    </tr>
     <tr >
    
      <td className='p-3 m-3'>Smallcase</td>
      <td className='p-3 m-3'>Per transaction</td>
      <td className='p-3 m-3'>Buy & Invest More: 100 | SIP: 10</td>
     
    
    </tr>
     <tr >
    
      <td className='p-3 m-3'>Kite Connect</td>
      <td className='p-3 m-3'>Monthly</td>
      <td className='p-3 m-3'>Connect: 500 | Historical: 500</td>
     
    
    </tr>
  </tbody>
</table>

            </div>

        </div>
     );
}

export default Charges;