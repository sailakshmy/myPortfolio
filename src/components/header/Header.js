import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//Logo
import Logo from '../../assets/icons/LogoNew.PNG';
//Styles
import './Header.css';

const Header = () => {
  return (
    <Navbar className='navbar-theme animate-navbar justify-content-between'
            collapseOnSelect
            expand="md" 
           // bg = "dark"
            variant="dark" 
            fixed='top'>
      <Navbar.Brand href="#home">
       <img className='logo' 
           src={Logo} 
           alt='Personal Logo' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#aboutme">About Me</Nav.Link>
          <Nav.Link href="#techstack">Tech Stack</Nav.Link>
          <Nav.Link href="#experience">Experience</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contactme">Contact Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
  </Navbar>
  )
}

export default Header;
