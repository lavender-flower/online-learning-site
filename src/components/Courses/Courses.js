
import React from 'react';
import Card from 'react-bootstrap/Card';
import '../all.css'


import useCourses from '../../hooks/useCourses';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpenReader, faChartLine, faFileCircleQuestion, faFileContract, faLaptopCode, faPersonChalkboard, faRobot } from '@fortawesome/free-solid-svg-icons';

const Courses = () => {
    const[courses]=useCourses();
    
    return (
        <div>
  <div class="container-o">
  <img src="images/bannerpic2.png" width='100%' alt="Avatar" class="image"  style={{filter: "brightness(65%)"}}/>
  <div class="overlay">
    <div class="text-o"><p style={{fontSize:'4vw'}}>Our Courses</p>
    <p>You should explore this page</p></div>
  </div>
</div>

            

    {
        courses.map((course,i)=>(
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
  <div class="row">
  
    <div class="col-lg-8 b-color text-start">

    <h1 style={{fontSize:'4vw'}}>Help Young Learners Reap Long-term Benefits</h1>
    <p style={{fontSize:'1.5vw'}}>Discover the benefits of studying at our center. We dare to affirm that our center has the most scientific method for comprehensive development</p>
    <hr></hr>
    <div>
  <div class="row">
    <div class="col text-center">
      
    <FontAwesomeIcon className='text-warning follower-item1 ' style={{fontSize:'4vw',backgroundColor:'white'}}  icon={faLaptopCode} />
    
    <p className='pt-2' style={{fontSize:'2vw'}}>Codding</p>
    <p style={{fontSize:'1.3vw'}}>Fast codding and facilitating learning or the acquisition</p>
    </div>
    <div class="col text-center">
    <FontAwesomeIcon style={{fontSize:'4vw',backgroundColor:'white'}} className='text-warning  follower-item1 ' icon={faBookOpenReader} />
    <p className='pt-2' style={{fontSize:'2vw'}}>Discussion</p>
    <p style={{fontSize:'1.3vw'}}>Acquisition of knowledge, skills, values, morals</p>
    </div>
    <div class="col text-center">
    <FontAwesomeIcon style={{fontSize:'4vw',backgroundColor:'white'}} className='text-warning follower-item1 ' icon={faPersonChalkboard} />
    <p className='pt-2' style={{fontSize:'2vw'}}>Smart Training</p>
    <p style={{fontSize:'1.3vw'}}>Skills, values, morals, beliefs, and habits. Educatio</p>
    </div>
    <div class="col text-center">
    <FontAwesomeIcon style={{fontSize:'4vw',backgroundColor:'white'}} className='text-warning follower-item1 ' icon={faRobot} />
    <p className='pt-2' style={{fontSize:'2vw'}}>Activities</p>
    <p style={{fontSize:'1.3vw'}}>Process of facilitating learning or the acquisition</p>
    </div>
  </div>
</div>
    </div>
    <div class="col-lg-4">
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

export default Courses;