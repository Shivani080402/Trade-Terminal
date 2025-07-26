import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import Equity from './Equity';
import Charges from './Charges';
import EquityPage from './EquityPage';

function PricingPage() {
    return ( 
        <> 
            <Hero />
            <EquityPage /> 
            <Brokerage />
            <Charges />
            
        </>
     );
}

export default PricingPage;