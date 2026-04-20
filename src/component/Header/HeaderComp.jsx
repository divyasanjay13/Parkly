
import React from 'react';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { Navbar, Nav, Button} from 'react-bootstrap';
import './HeaderComp.css';



const HeaderComp = () => {
  return (
<>
      {['lg'].map((expand) => (
        <Navbar  expand={expand} className='customHeader'>
          <Container fluid>
          <Link to="/" className="navbarLogo">
        <img
              src={logo}             
              width="231px"
             height="85px"
              className="d-inline-block align-top"
              alt="logo"
            />
        </Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
             className="offcanvasnavbar"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <Link to="/" className="navbarLogo">
         <img
           src={logo}
           width="231px"
           height="85px"
           className="d-inline-block align-top"
           alt="logo"
         />
       </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Nav className='navLinks'>
              <Link to="/how-it-works/overview/ ">How it works</Link>
            <Link to="/how-it-works/rent-out-your-driveway ">Rent out your space</Link>
            <Link to="/business-solutions">Business</Link>
            <Link to="# ">EV</Link>
            <Link to="# ">Company</Link>
            <Link to="# ">Help</Link>
            <Link to="# " className='greenText'>Login</Link>
            <Button variant="outline-success"  className="btngreen">Search</Button>                 
                </Nav>
              
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      
      ))}
      </>
      

  ); 
  
};

export default HeaderComp;