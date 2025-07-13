import React from 'react';

function LeftSection({imageURL , productName , productDescription , tryDemo , learnMore , googlePlay , appStore}) {
    return ( 
       <div className='container border-top mt-5'>
        <div className='row mt-5'>
            <div className='col-6 p-5'>
                <img src={imageURL} />
            </div>
             <div className='col-6 p-3 mt-5'>
             <h1>{productName}</h1>
            <p>{productDescription}</p>
            <div className='mb-3'>
            <a href={tryDemo}  style={{textDecoration : "none"}}>Try Demo</a>
              <a href={learnMore} style={{marginLeft : "50px" ,textDecoration : "none"}}>Learn More</a>
              </div>
              <div>
                <a href={googlePlay} style={{textDecoration : "none"}}><img src='media/Images/googlePlayBadge.svg' /></a>
                  <a href={appStore} style={{marginLeft : "20px" ,textDecoration : "none"}}> <img src='media/Images/appstoreBadge.svg'/></a>
                  </div>
                  </div>
        </div>
       </div>
     );
}

export default LeftSection;