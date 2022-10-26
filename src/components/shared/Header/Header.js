import React from 'react';
import './Header.css';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    const [show, setShow] = useState(false);
    const toggle = e =>{
        setShow(show => !show);
    }
    return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href="/"> Learning Point</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/courses">Courses</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
          </Nav>
          <div className='d-flex'>
            <div className="login">
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </div>
            <button className='logout'>Log Out</button>
            <div className="dark-light">
                <input onClick={toggle} type="button" value={show ? 'Dark' : 'Light'} />
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;