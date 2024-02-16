import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Home.css';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <>
          <div>
          <Carousel data-bs-theme="light">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/bannerpic2.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Hello Students!</h5>
          <p>Are You Wanna be a programer?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/bannerpic3.png"
          
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>What Kind of course are you search?</h5>
          <p>Or any Programming laguage?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/bannerpic4.png"
          
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>We will help you!!</h5>
          <p>
          Here You Can Learn Any Type Programming Language...
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
       
            </div>  

<div className='mx-auto p-5 row'>
<div className='col-md-3'>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="images/images4.jpg" />
      <Card.Body>
        <Card.Title>C++ Online Learn</Card.Title>
        <Card.Text>
        Learn C++. C++ is a popular programming language. C++ is used to create computer programs, and is one of the most used language in game development.

        </Card.Text>
        <Link to='/courses'> <Button variant="primary">watch more</Button></Link>
      </Card.Body>
    </Card>
</div>
<div className='col-md-3'>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="images/images1.jpg" />
      <Card.Body>
        <Card.Title>Python Online Learn</Card.Title>
        <Card.Text>
        Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.

        </Card.Text>
        <Link to='/courses'> <Button variant="primary">watch more</Button></Link>
      </Card.Body>
    </Card>
</div>
<div className='col-md-3'>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="images/images5.png" />
      <Card.Body>
        <Card.Title>SQL Online Learn</Card.Title>
        <Card.Text>
        Our SQL tutorial will teach you how to use SQL in: MySQL, SQL Server, MS Access, Oracle, Sybase, Informix, Postgres, and other database systems.
        </Card.Text>
        <Link to='/courses'> <Button variant="primary">watch more</Button></Link>
      </Card.Body>
    </Card>
</div>
<div className='col-md-3'>
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="images/images3.png" />
      <Card.Body>
        <Card.Title>Java Online Learn</Card.Title>
        <Card.Text>
        Learn Java. Java is a popular programming language. Java is used to develop mobile apps, web apps, desktop apps, games and much more.
        </Card.Text>
       <Link to='/courses'> <Button variant="primary">watch more</Button></Link>
      </Card.Body>
    </Card>
</div>

</div>
<section className="d-flex follower-item">
    <div className="haf-width f-txy-pad">
    <h1>700k</h1>
    <p>Youtube Subscribers</p>
 </div>
 <div className="haf-width f-txy-pad">
    <h1>2.4m</h1>
    <p>Instagram Followers</p>
 </div>
 <div className="haf-width f-txy-pad">
    <h1>100k</h1>
    <p>Dribble shot likes</p>
 </div>
  

  </section>

        </>
    );
};

export default Home;