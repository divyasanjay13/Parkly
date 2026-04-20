import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Button,Container,Offcanvas } from "react-bootstrap";
import "./HeaderTwo.css";
import logo from "../../assets/images/parkly-logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { BsPersonWorkspace } from "react-icons/bs";
import { IoEarthSharp } from "react-icons/io5";
import { MdElectricScooter } from "react-icons/md";
import { GiDoubleStreetLights } from "react-icons/gi";
import { IoMdHelpCircleOutline } from "react-icons/io";




const toggleMenu = () => {
  setIsOpen(!isOpen);
};

const handleClickOutside = (event) => {
  if (menuRef.current && !menuRef.current.contains(event.target)) {
    setIsOpen(false);
  }
};

const HeaderTwo = () => {
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  return (
    
    <>
    {[ 'lg'].map((expand) => (
      <Navbar key={expand} expand={expand} className="customHeader">
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
            <Nav className="navLinks">
        <div className="dropdown">
          <div className="dropdownlink">
            Park with us
            <div className="dropdown_navicon">
              <IoIosArrowDown />
            </div>
            <div className="dropdown_content">
              <div className="icondropdown_links d-flex">
                <ul className="mt-5 p-0">
                  <li>
                    <Link to="#" className="link_nav">
                      <div className="circle_foricon"> <BsPersonWorkspace /> </div>
                      How it works
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="link_nav">
                    <div className="circle_foricon"> <IoEarthSharp /></div>
                      Monthly pairing
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="link_nav">
                    <div className="circle_foricon"> <MdElectricScooter /></div>
                      Electric vehicle charging
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="link_nav">
                    <div className="circle_foricon"> <GiDoubleStreetLights /> </div>
                      On street parking
                    </Link>
                  </li>
                </ul>
               <div className="choices_blocknav">
                  <p>Popular choices</p>
                  <ul>
                      <li><Link to="#" className="link_nav">Airport parking</Link></li>
                      <li><Link to="#" className="link_nav">Train Station parking</Link></li>
                      <li><Link to="#" className="link_nav">Stadium parking</Link></li>
                      <li><Link to="#" className="link_nav">City breaks</Link></li>
                      <li><Link to="#" className="link_nav">Office parking</Link></li>
                  </ul>
               </div>
              </div>
            </div>
          </div>

          <div className="dropdownlink">
            Work with us
            <div className="dropdown_navicon">
              <IoIosArrowDown />
            </div>
            <div className="dropdown_content">
             <ul className="linkfor_work">
              <li><Link to="#">CarPark for business</Link></li>
              <li><Link to="#">Partner with us</Link></li>
             </ul>
            </div>
          </div>
        </div>
        <Link to="/help" className="help_icon"> 
        <IoMdHelpCircleOutline />
        </Link>   
       <Button variant="outline-success" className="btngreen border-r1">
         My Account
        </Button>
       <Button variant="outline-success" className="btngreen border-r1 button-bg">
       Rent out your driveway for free
        </Button>
      </Nav>          
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    ))}
  </>
  );
};

export default HeaderTwo;
