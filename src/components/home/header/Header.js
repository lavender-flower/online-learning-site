import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { NavLink,Link } from "react-router-dom";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import useAuth from '../../../hooks/useAuth';
import '../../all.css'

const Header = () => {
  const {user,logOut}=useAuth();
    return (
        <div>
         
            
      <Navbar fixed='top' className='b-bg' collapseOnSelect expand='lg' data-bs-theme="light" >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav"> 
      <Navbar.Brand href="#home" className='ps-5'> <img src='images/orange-removebg-preview.png' style={{width:'3vw'}} alt=''></img></Navbar.Brand>
     
        
           
          
          <Nav className="me-auto px-3">
            
            <Nav.Link ><NavLink className='text-decoration-none text-warning' to='/home'>Home</NavLink></Nav.Link>
            <Nav.Link ><Link className='text-decoration-none text-warning' to='/courses'>Courses</Link></Nav.Link>
            <Nav.Link ><NavLink className='text-decoration-none text-warning' to='/teachers'>Teachers</NavLink></Nav.Link>
            <Nav.Link ><NavLink className='text-decoration-none text-warning' to='/aboutus'>About Us</NavLink></Nav.Link>
            {user?.email? 
            <Button onClick={logOut} variant='light'>Logout</Button>:
              <Nav.Link ><NavLink className='text-decoration-none text-warning' to='/login'>Login</NavLink></Nav.Link>

            }
          </Nav>
          <Form className="d-flex">
          <Navbar.Text className='text-warning'>Signed in as <a href='#login'>{user?.displayName}</a></Navbar.Text>
                </Form>
      
        </Navbar.Collapse>
      </Navbar>
        </div>
    );
};

export default Header;