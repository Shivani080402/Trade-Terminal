import React, { useState } from 'react';
import Equity from './Equity';
import Currency from './Currency';
import Commodity from './Commodity';

function EquityPage() {
  // Default to 'Equity' so it's always visible initially
  const [activeComponent, setActiveComponent] = useState('Equity');

  const handleClick = (componentName, e) => {
    e.preventDefault();
    setActiveComponent(componentName);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col mb-4 p-2 border-bottom'>

          <a
            className='fs-3 m-4'
            style={{ textDecoration: 'none', cursor: 'pointer' }}
            onClick={(e) => handleClick('Equity', e)}
          >
            Equity
          </a>

          <a
            className='fs-3 m-4 p-2'
            style={{ textDecoration: 'none', cursor: 'pointer' }}
            onClick={(e) => handleClick('Currency', e)}
          >
            Currency
          </a>

          <a
            className='fs-3 m-4 p-2'
            style={{ textDecoration: 'none', cursor: 'pointer' }}
            onClick={(e) => handleClick('Commodity', e)}
          >
            Commodities
          </a>

        </div>

        <div className='col-12'>
          {activeComponent === 'Equity' && <Equity />}
          {activeComponent === 'Currency' && <Currency />}
          {activeComponent === 'Commodity' && <Commodity />}
        </div>
      </div>
    </div>
  );
}

export default EquityPage;
