import React from 'react';

import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

import Universe from './Universe';

function ProductPage() {
    return ( 
        <>
           
            <Hero />
            <LeftSection imageURL="media/Images/Kite.png"  productName="Kite-Terminal"  productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."  tryDemo=""  learnMore=""  googlePlay=""  appStore=" " />
             <RightSection imageURL="media/Images/console.png"  productName="Console-Terminal"  productDescription="The central dashboard for your Trade-Terminal account. Gain insights into your trades and investments with in-depth reports and visualisations." tryDemo=""  learnMore=""  googlePlay=""  appStore=" " />
            <LeftSection imageURL="media/Images/coin.png"  productName="Coin-Termianl"  productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo=""  learnMore=""  googlePlay=""  appStore=" " />
            <RightSection imageURL="media/Images/kitconnectnew.svg"  productName="Kite Connect API"  productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." tryDemo=""  learnMore=""  googlePlay=""  appStore=" " />
            <LeftSection imageURL="media/Images/varsity.png"  productName="Varsity mobile"  productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."  tryDemo=""  learnMore=""  googlePlay=""  appStore=" " />

            <p className='text-center fs-5 text-muted mb-5'>Want to know more about our technology stack? Check out the <a href='/'>TradeTerminal.tech</a> blog.</p>
            <Universe />
            
        </>
     );
}

export default ProductPage;