import React from 'react';
import './Footerpart.css';
import {
    MDBFooter,
    MDBContainer,
    
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn,
    
  } from 'mdb-react-ui-kit';
const Footerpart = () => {
    return (
        <div className='mt-5 b-bg'>
            
    
    
    <MDBFooter className='text-center' color='white'>
      <MDBContainer className='p-4'>
        

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4 text-center'>
            <p>onlinelearn@gmail.com</p>
           <p> Learn Some Programming Language For Your Better Future. You can contact with us too.</p>
        </section>

       
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
       <small> Site made by ajmiri © 2020 Copyright:onlinelearn</small>
        
      </div>
    </MDBFooter>


        </div>

    );
};

export default Footerpart;