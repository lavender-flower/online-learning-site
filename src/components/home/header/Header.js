import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { NavLink,Link } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const {user,logOut}=useAuth();
    return (
        <div>
          <div>
            <h5 className='text-primary text-center bg-body-tertiary p-2'>ONLINE LEARN SITE</h5>
          </div>
             
      <Navbar bg="light" data-bs-theme="light" collapseOnSelect expand='lg'>
        <Container>
           
          <Navbar.Brand href="#home"> <img src='images/onlinelearnlogo.png' alt=''></img></Navbar.Brand>
          <Nav className="me-auto">
            
            <Nav.Link ><NavLink className='text-decoration-none' to='/home'>Home</NavLink></Nav.Link>
            <Nav.Link ><Link className='text-decoration-none' to='/courses'>Courses</Link></Nav.Link>
            <Nav.Link ><NavLink className='text-decoration-none' to='/teachers'>Teachers</NavLink></Nav.Link>
            <Nav.Link ><NavLink className='text-decoration-none' to='/aboutus'>About Us</NavLink></Nav.Link>
            {user?.email? 
            <Button onClick={logOut} variant='light'>Logout</Button>:
              <Nav.Link ><NavLink className='text-decoration-none' to='/login'>Login</NavLink></Nav.Link>

            }
          </Nav>
          <Form className="d-flex">
          <Navbar.Text className='text-primary'>Signed in as: <a href='#login'>{user?.displayName}</a></Navbar.Text>
                </Form>
        </Container>
      </Navbar>
        </div>
    );
};

export default Header;