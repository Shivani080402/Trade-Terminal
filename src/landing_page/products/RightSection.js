import React from 'react';

function RightSection({imageURL , productName , productDescription , tryDemo , learnMore , googlePlay , appStore}) {
    return ( 
       <div className='container border-top mt-5'>
        <div className='row '>
            
             <div className='col-6 p-5 mt-5'>
             <h1 className='mt-5 pb-2' >{productName}</h1>
            <p className='pb-2'>{productDescription}</p>
            <div className='mb-3'>
           
              <a href={learnMore} style={{ textDecoration : "none"}}>Learn More</a>
              </div>
                  </div>

                  <div className='col-6'>
                <img src={imageURL} />
            </div>
        </div>
       </div>
     );
}

export default RightSection;