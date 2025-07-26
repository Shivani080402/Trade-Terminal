import React from 'react';
import Hero from './Hero';
import Award from './Award';
import Stats from './Stats';
import Pricing from './HomePricing';
import Education from './Eductation';
import OpenAccount from '../OpenAccount';



function HomePage() {
    return ( 
        <>
           
            <Hero />
            <Award />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
           
        </>
     );
}

export default HomePage;