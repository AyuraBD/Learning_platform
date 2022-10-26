import React from 'react';
import './Header.css';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Routes/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    const [show, setShow] = useState(false);

    //Toggle dark and light button
    const toggle = e =>{
        setShow(show => !show);
    }
    const handleLogOut = () =>{
      logOut();
    }

    return (
    <Navbar bg="primary" expand="lg" className='p-3'>
      <Container>
        <Navbar.Brand href="/home"> Learning Point</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/courses">Courses</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
          </Nav>
          <div className='d-flex'>
            <>
              {
                user?.uid ? 
                <>
                  <span className='d-flex justify-content-center align-items-center user-img'>
                    <span className="user-name">{user.displayName}</span>             
                    <Image className='' roundedCircle style={{width:'40px', height:'40px'}} src={user.photoURL}></Image>
                  </span>
                </>
                : undefined
              }
            </>
            <>
              {
                user?.uid ? <button onClick={handleLogOut} className='logout'>Log Out</button>
                : <div className="login">
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </div>
              }
            </>
            
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