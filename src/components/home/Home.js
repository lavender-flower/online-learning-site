import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Home.css';
import {Link} from "react-router-dom";
import Docs from '../../teachers.json';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpenReader, faCalendar, faChartLine, faCircleQuestion, faClock, faEnvelope, faFile, faFileCircleQuestion, faFileContract, faLaptopCode, faPersonChalkboard, faRobot, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

var daysE1= document.getElementById('days');
var hoursE1= document.getElementById('hours');
var minutesE1= document.getElementById('minutes');
var secondsE1= document.getElementById('seconds');

function countdownTimer(){
  const countDownDate= new Date('09/12/2024').getTime();
  const second =1000;
  const minute=second * 60;
  const hour = minute * 60;
  const day =hour*24;

  const interval =setInterval(()=>{
    const now = new Date().getTime();
    const distance=countDownDate-now;
  
    // daysE1.innerText=formatNumber(2);
    // hoursE1.innerText=formatNumber(19);
    // minutesE1.innerText=formatNumber(55);
    // secondsE1.innerText=formatNumber(59);
  
    //  daysE1.innerText =formatNumber(Math.floor(distance/day));
    // hoursE1.innerText =formatNumber(Math.floor((distance%day)/hour));
    // minutesE1.innerText =formatNumber(Math.floor((distance%hour)/minute));
    // secondsE1.innerText =formatNumber(Math.floor((distance%minute)/second));

  },1000);

 
}

function formatNumber(number){
  if(number<10){
    return '0'+number
  }
  return  number

}
countdownTimer()

const Home = () => {
    return (
        <>
          <div style={{fontSize:'1.5vw'}}>
          <Carousel data-bs-theme="light">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/bannerpic2.png"
          alt="First slide"
          style={{filter: "brightness(65%)"}}
        />
        <Carousel.Caption className='text-warning'>
          <h5 style={{fontSize:'3vw'}} >Hello Students!</h5>
          <p>Are You Wanna be a programer?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/bannerpic3.png"
          
          alt="Second slide"
          style={{filter: "brightness(65%)"}}
        />
        <Carousel.Caption className='text-warning'>
          <h5  style={{fontSize:'3vw'}} >What Kind of course are you search?</h5>
          <p>Or any Programming laguage?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/bannerpic4.png"
          
          alt="Third slide"
          style={{filter: "brightness(65%)"}}
        />
        <Carousel.Caption className='text-warning'>
          <h5  style={{fontSize:'3vw'}} >We will help you!!</h5>
          <p>
          Here You Can Learn Any Type Programming Language...
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
       
            </div>  
            <div className='pt-5 ps-5'>
              <h1 style={{fontSize:'3vw'}} className='text-start b-color'>Popular Courses</h1>
              <p style={{fontSize:'1'}} className='text-secondary text-start'>Here You Can Learn Any Type Programming Language</p><hr></hr>
            </div>

<>
<div className='m-3  row'>
<div className='col-md-3'>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="images/images4.jpg" />
      <Card.Body className='b-color'>
        <Card.Title>C++ Online Learn</Card.Title>
        <Card.Text style={{fontSize:'1vw'}}>
        Learn C++. C++ is a popular programming language. C++ is used to create computer programs, and is one of the most used language in game development.

        </Card.Text>
       <div className='d-flex justify-content-between'>
        <div>
          <small><FontAwesomeIcon icon={faFile} /> 14  <FontAwesomeIcon icon={faUserGraduate} className='ps-2'/> 358</small>
        </div>
<small style={{color:'#32cd32'}}>Free</small>
       </div>
      </Card.Body>
    </Card>
</div>
<div className='col-md-3 my-2 '>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="images/images1.jpg"  />
      <Card.Body className='b-color'>
        <Card.Title>Python Online Learn</Card.Title>
        <Card.Text style={{fontSize:'1vw'}}>
        Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.

        </Card.Text>
        <div className='d-flex justify-content-between'>
        <div>
          <small><FontAwesomeIcon icon={faFile} /> 30  <FontAwesomeIcon icon={faUserGraduate} className='ps-2'/> 558</small>
        </div>
<small style={{color:'#32cd32'}}>Free</small>
       </div>

      </Card.Body>
    </Card>
</div>
<div className='col-md-3 my-2'>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="images/images5.png" />
      <Card.Body className='b-color'>
        <Card.Title>SQL Online Learn</Card.Title>
        <Card.Text style={{fontSize:'1vw'}}>
        Our SQL tutorial will teach you how to use SQL in: MySQL, SQL Server, MS Access, Oracle, Sybase, Informix, Postgres, and other database systems.
        </Card.Text>
        <div className='d-flex justify-content-between'>
        <div>
          <small><FontAwesomeIcon icon={faFile} /> 34  <FontAwesomeIcon icon={faUserGraduate} className='ps-2'/> 358</small>
        </div>
<small style={{color:'red'}}>3000 tk <span style={{textDecoration:'line-through'}}>4000 tk</span></small>
       </div>
      </Card.Body>
    </Card>
</div>
<div className='col-md-3'>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="images/images3.png" />
      <Card.Body className='b-color'>
        <Card.Title>Java Online Learn</Card.Title>
        <Card.Text style={{fontSize:'1vw'}}>
        Learn Java. Java is a popular programming language. Java is used to develop mobile apps, web apps, desktop apps, games and much more.
        </Card.Text>
        <div className='d-flex justify-content-between'>
        <div>
          <small><FontAwesomeIcon icon={faFile} /> 24  <FontAwesomeIcon icon={faUserGraduate} className='ps-2'/> 458</small>
        </div>
<small style={{color:'red'}}> 4500 tk <span style={{textDecoration:'line-through'}}>5500 tk</span></small>
       </div>
      </Card.Body>
    </Card>
</div>

</div>
<div className='pt-3'>
<Link to='/courses'> <Button variant="warning" className='px-5'>view all</Button></Link>
</div>
</>

<div className='pt-5'>

<div className="card bg-dark text-white">
  <img src="images/b1.jpg" className="card-img" alt="..." style={{filter: "brightness(65%)"}}/>
  <div className="card-img-overlay row " >
   <div className='col p-5' style={{marginTop:'20vw'}}>
   <p className="card-text display-6 text-start  ps-5" style={{fontSize:'1vw'}}>GET 100 OF ONLINE COURSES FOR FREE

</p>
   <h1 className="card-title display-4 text-start  ps-5" style={{fontSize:'4vw'}}>
REGISTER NOW
</h1>


<div id='countdown' className='countdown '>
  <ul className='d-flex justify-content-center '>
    <li><span id='days'>00</span>days</li>
    <li><span id='hours'>00</span>hours</li>
    <li className='separator'>:</li>
    <li><span id='minutes'>00</span>minutes</li>
    <li className='separator'>:</li>
    <li><span id='seconds'>00</span> seconds</li>
  </ul>

</div>

    
   </div>
   <div className='p-5 col' >
    <div><p className='text-center bg-warning' style={{fontSize:'2vw',borderRadius:'3vw',padding:'4vw'}}>Create your free account now <br></br>and immediately get access to <br></br>100s of online courses.</p></div>
 <div className='bg-light' style={{borderRadius:'3vw',padding:'4vw'}}>
 <form >
  <p className='text-warning text-start' style={{fontSize:'2vw'}}>Fill it up:</p>
 <div className="mb-3 text-start">
      
      <input type="text" style={{fontSize:'1.3vw'}} className="form-control" id="exampleInputEmail1" aria-describedby=" " placeholder='Your first name'/>
      
    </div>
    <div className="mb-3 text-start">
      
      <input type="text" style={{fontSize:'1.3vw'}} className="form-control" id="exampleInputEmail1" aria-describedby=" " placeholder='Your last name'/>
      
    </div>
 <div className="mb-3 text-start">
      
      <input type="email" style={{fontSize:'1.3vw'}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email address'/>
      <div id="emailHelp" style={{fontSize:'1vw'}} className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3 text-start">
     
      <input type="password"style={{fontSize:'1.3vw'}}  className="form-control" id="exampleInputPassword1" placeholder='Write password'/>
    </div>
    <div className="mb-3 text-start">
     
     <input type="password" style={{fontSize:'1.3vw'}} className="form-control" id="exampleInputPassword1" placeholder='Re-write password'/>
   </div>
    <div className="mb-3 form-check text-start">
      <input type="checkbox" style={{fontSize:'1vw'}} className="form-check-input" id="exampleCheck1"/>
      <label style={{fontSize:'1vw'}} className="form-check-label text-dark" for="exampleCheck1">Check me out</label>
    </div>
    <div className='text-start'><button type="submit" className="btn  btn-warning">Submit</button></div>
  </form>
 </div>
   </div>
  </div>
</div>
</div>

<section className='p-4'>
<div className='py-5'>
  <div className="row">
    <div className="col-lg-4">
      <img src='images/thumbs.jpg' height='450vh' style={{borderRadius:'3vw'}}></img>
    </div>
    <div className="col-lg-8 b-color text-start">

    <h1 style={{fontSize:'4vw'}}>Help Young Learners Reap Long-term Benefits</h1>
    <p style={{fontSize:'1.5vw'}}>Discover the benefits of studying at our center. We dare to affirm that our center has the most scientific method for comprehensive development</p>
    <hr></hr>
    <div>
  <div className="row">
    <div className="col text-center">
      
    <FontAwesomeIcon className='text-warning follower-item1 ' style={{fontSize:'4vw',backgroundColor:'white'}}  icon={faLaptopCode} />
    
    <p className='pt-3' style={{fontSize:'2vw'}}>Codding</p>
    <p style={{fontSize:'1.3vw'}}>Fast codding and facilitating learning or the acquisition</p>
    </div>
    <div className="col text-center">
    <FontAwesomeIcon style={{fontSize:'4vw',backgroundColor:'white'}} className='text-warning  follower-item1 ' icon={faBookOpenReader} />
    <p className='pt-3' style={{fontSize:'2vw'}}>Discussion</p>
    <p style={{fontSize:'1.3vw'}}>Acquisition of knowledge, skills, values, morals</p>
    </div>
    <div className="col text-center">
    <FontAwesomeIcon style={{fontSize:'4vw',backgroundColor:'white'}} className='text-warning follower-item1 ' icon={faPersonChalkboard} />
    <p className='pt-3' style={{fontSize:'2vw'}}>Smart Training</p>
    <p style={{fontSize:'1.3vw'}}>Skills, values, morals, beliefs, and habits. Educatio</p>
    </div>
    <div className="col text-center">
    <FontAwesomeIcon style={{fontSize:'4vw',backgroundColor:'white'}} className='text-warning follower-item1 ' icon={faRobot} />
    <p className='pt-3' style={{fontSize:'2vw'}}>Activities</p>
    <p style={{fontSize:'1.3vw'}}>Process of facilitating learning or the acquisition</p>
    </div>
  </div>
</div>
    </div>
   
  </div>
</div>
</section>

<div className='p-5 '>
  <h1 className='b-color text-start pb-3' style={{fontSize:'4vw'}}>Connecting You with Our Expert Team</h1>
  <p style={{fontSize:'1.vw'}} className='text-secondary text-start'>Here You Can Learn Any Type Programming Language</p>
  <hr></hr>
  <div className="row row-cols-1  row-cols-md-4 g-4 pt-4">
  {
    Docs.slice(0,4).map(doc=>{
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
<div className='pt-5'>
<Link to='/teachers'> <Button variant="warning" className='px-5'>view all</Button></Link>
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


<section className="d-flex follower-item b-color bg-warning">
    <div className="haf-width f-txy-pad pt-2">
   <h1> <FontAwesomeIcon icon={faFacebook} /></h1>
    <h3>700k</h3>
    <p>Youtube Subscribers</p>
 </div>
 <div className="haf-width f-txy-pad pt-2">
  <h1><FontAwesomeIcon icon={faInstagram} /></h1>
    <h3>2.4m</h3>
    <p>Instagram Followers</p>
 </div>
 <div className="haf-width f-txy-pad pt-2">
  <h1><FontAwesomeIcon icon={faYoutube} /></h1>
    <h3>100k</h3>
    <p>Dribble shot likes</p>
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

        </>
    );
};

export default Home;