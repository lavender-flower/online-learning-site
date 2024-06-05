
import React from 'react';
import Card from 'react-bootstrap/Card';
import '../all.css'


import useCourses from '../../hooks/useCourses';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpenReader, faChartLine, faFileCircleQuestion, faFileContract, faLaptopCode, faPersonChalkboard, faRobot } from '@fortawesome/free-solid-svg-icons';


   

const MyClasses = () => {
    const[courses]=useCourses();
    return (
        <div>
             <div>
  <div className="container-o">
  <img src="images/bannerpic4.png" width='100%' alt="Avatar" className="image"  style={{filter: "brightness(65%)"}}/>
  <div className="overlay">
    <div className="text-o"><p style={{fontSize:'4vw'}}>My Classes</p>
    <p>You Leave your className here</p></div>
  </div>
</div>

            

    {
        courses.slice(0,5).map((course,i)=>(
            <div className='m-4' key={i}>
                
                <div className="card  style ">
  <div className="row g-0 text-start">
    <div className="col-md-4">
      <img src={course.img} className="img-fluid rounded-start" alt="..."></img>
    </div>
    <div className="col-md-8">
      <div className="card-body text-start">
        <h5 className="card-title">{course.name}</h5>
        <small className="card-text">{course.purpose}</small>
        <p className="card-text text-success">Price:{course.price}tk</p>
        <p className="card-text"><small className="text-body-secondary">Purchased by <span className='text-danger'>{course.students}</span> students</small></p>
      </div>
    </div>
  </div>
</div>

            </div>
        ))
    }

<section className='p-4'>
<div className='py-5'>
  <div className="row">
  
    <div className="col-lg-8 b-color text-start">

    <h1 style={{fontSize:'4vw'}}>Help Young Learners Reap Long-term Benefits</h1>
    <p style={{fontSize:'1.5vw'}}>Discover the benefits of studying at our center. We dare to affirm that our center has the most scientific method for comprehensive development</p>
    <hr></hr>
    <div>
    <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Write Your Problems</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
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
        </div>
    );
};

export default MyClasses;