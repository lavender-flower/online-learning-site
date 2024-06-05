import React from 'react';
import Docs from '../../teachers.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faChartLine, faClock, faEnvelope, faFileCircleQuestion, faFileContract } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Button } from 'react-bootstrap';
const Teachers = () => {
    return (
        <div className='pt-5'>
              <div class="container-o">
  <img src="images/teacher.jpg" width='100%' alt="Avatar" class="image"  style={{filter: "brightness(55%)"}}/>
  <div class="overlay">
    <div class="text-o"><p style={{fontSize:'4vw'}}>Our Brilliant Teachers</p>
    <p>You should explore this page</p></div>
  </div>
</div>

<div className='p-5 '>
  <h1 className='b-color pb-3'>Connecting You with Our Expert Team</h1>
  <div className="row row-cols-1  row-cols-md-4 g-4 pt-4">
  {
    Docs.map(doc=>{
      return(
        <div className="col">
        <div className="card h-100">
        <div class="container-t">
  <img src={doc.img} alt="Avatar" className="card-img-top image-t zoom" />
  <div class="overlay-t"><p className='text-warning' style={{fontSize:'1.8vw'}}><FontAwesomeIcon className='mx-2' icon={faEnvelope} /><FontAwesomeIcon className='mx-2' icon={faFacebook} /><FontAwesomeIcon className='mx-2' icon={faYoutube} /></p></div>
</div>
          
          <div className="card-body">
            <h5 className="card-title text-secondary"><p style={{fontSize:'1.5vw'}}>Hi I'm {doc.name} </p></h5>
            <p className="card-text">{doc.department} Expert</p>
          </div>
        </div>
      </div>
        
        )
    })
  }
</div>
</div>
<section className='p-4'>
<div className='py-5'>
  <div className="row">
  
    <div className="col-lg-8 b-color text-start">

    <h1 style={{fontSize:'4vw'}}>Upcoming Events </h1>
    <p style={{fontSize:'1.5vw'}}>Discover the benefits of studying at our center. We dare to affirm that our center has the most scientific method for comprehensive development</p>
    <hr></hr>
    <div>
  <div className="row">
    <div className="col bg-light m-2 p-4" style={{borderRadius:'1vw'}} >
    <h1 style={{fontSize:'1.5vw'}}>Learn To Write Python</h1>  
    <h1 style={{fontSize:'1.2vw'}}> <FontAwesomeIcon  icon={faClock} /> 9.00 am - 11.00 am</h1>
    <h1 style={{fontSize:'1.2vw'}}><FontAwesomeIcon  icon={faCalendar} />  Today</h1>
    
    </div>
    <div className="col bg-light m-2 p-4" style={{borderRadius:'1vw'}}>
    <h1 style={{fontSize:'1.5vw'}}>Learn About PHP</h1>  
    <h1 style={{fontSize:'1.2vw'}}><FontAwesomeIcon  icon={faClock} /> 4.00 pm - 11.00 am</h1>
    <h1 style={{fontSize:'1.2vw'}}><FontAwesomeIcon  icon={faCalendar} />  Today</h1>
    
    </div>
    <div className="col bg-light m-2 p-4" style={{borderRadius:'1vw'}}>
    <h1 style={{fontSize:'1.5vw'}}>One Day Session of Laravel</h1>  
    <h1 style={{fontSize:'1.2vw'}}> <FontAwesomeIcon  icon={faClock} /> 1.00 pm - 11.00 pm</h1>
    <h1 style={{fontSize:'1.2vw'}}><FontAwesomeIcon  icon={faCalendar} />  Today</h1>
    
    </div>
  
  </div>
  <div className='text-center py-5'><Button variant="warning" className='px-5'>view all</Button></div>
</div>
    </div>
    <div className="col-lg-4">
      <img src='images/b.jpg' height='450vh' style={{borderRadius:'3vw'}}></img>
    </div>
   
  </div>
</div>
</section>
<section className='pt-5'>
  <div>
    <p style={{fontSize:'4vw'}} className='b-color'>Why Choose us?</p>
    <p style={{fontSize:'1vw'}} className='text-secondary'>A choice that makes the difference.</p>
  </div>
  <div>
  <div className="container pb-5">
  <div className="row">
  <div className="col follower-item1 p-4" style={{backgroundColor:'white'}}>
    <FontAwesomeIcon className='text-warning' style={{fontSize:'3vw'}} icon={faFileContract} />
    <h5 style={{fontSize:'1.7vw'}} className='pt-2'>  Dedicated Support</h5>
      <p style={{fontSize:'1.2vw'}}>
    
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur    
      </p>
    </div>
    <div className="col follower-item1 p-4" style={{backgroundColor:'white'}}>
    <FontAwesomeIcon className='text-warning' style={{fontSize:'3vw'}} icon={faChartLine} />
    <h5 style={{fontSize:'1.7vw'}} className='pt-2'>Highly Experienced</h5><p style={{fontSize:'1.2vw'}}>
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</p>
    </div>
  
    <div className="col follower-item1 p-4" style={{backgroundColor:'white'}}>
    <FontAwesomeIcon className='text-warning' style={{fontSize:'3vw'}}  icon={faFileCircleQuestion} />
   <h5 style={{fontSize:'1.7vw'}} className='pt-2'>Question, Quiz & Course</h5>
    <p style={{fontSize:'1.2vw'}}>
Noluptas sit aspernatur aut odit aut  sed quia  sed quia fugit, sed quia consequuntur
</p>
    </div>
  </div>
</div>
  </div>
</section>
        </div>
    );
};

export default Teachers;