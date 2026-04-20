import React from "react";
import DownloadLinks from "../appdownloadicon/DownloadLinks";
import "./FooterComp.css";
import { Navbar, Row, Col, Dropdown } from "react-bootstrap";
import logo from "../../assets/images/logo.png";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const FooterComp = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Row>
          <Col lg={4}>
            <Link to="/ " className="navbarLogo">
              <img
                src={logo}
                width="231px"
                height="85px"
                className="d-inline-block align-top"
                alt="logo"
              />
          </Link>
          </Col>
          <Col lg={2}>
            <div className="links">
              <h6>Information</h6>
              <ul className="footerLinks">
                <li>
                  <Link to="#">About Us</Link>
                </li>
                <li>
                  <Link to="#">Affiliates</Link>
                </li>
                <li>
                  <Link to="#">Blog</Link>
                </li>
                <li>
                  <Link to="#">Careers</Link>
                </li>
                <li>
                  <Link to="#">Media coverage</Link>
                </li>
                <li>
                  <Link to="#">Site map</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={2}>
            <div className="links">
              <h6>Services</h6>
              <ul className="footerLinks">
                <li>
                  <Link to="#">Business accounts</Link>
                </li>
                <li>
                  <Link to="#">Car park management</Link>
                </li>
                <li>
                  <Link to="#">Electric vehicle charging</Link>
                </li>
                <li>
                  <Link to="#">Rent out your space</Link>
                </li>
                <li>
                  <Link to="#">Rent out your EV charger</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={2}>
            <div className="links">
              <h6>Points of interest</h6>
              <ul className="footerLinks">
                <li>
                  <Link to="#">Airport parking</Link>
                </li>
                <li>
                  <Link to="#">City parking</Link>
                </li>
                <li>
                  <Link to="#">Stadium parking</Link>
                </li>
                <li>
                  <Link to="#">Station parking</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={2}>
            <div className="links">
              <h6>Get in touch</h6>
              <ul className="footerLinks">
                <li>
                  <Link Link to="#">How CarPark works</Link>
                </li>
                <li>
                  <Link Link to="#">Help centre</Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={7}>
            <div className="socialIcons">
              <ul>
                <li>
                  <Link to="#">
                    <div className="iconcircle">
                      <FaFacebookF />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <div className="iconcircle">
                      <FaInstagram />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <div className="iconcircle">
                      <FaTwitter />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <div className="iconcircle">
                      <FaLinkedin />
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </Col>

          <Col lg={5}>
           <DownloadLinks/>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col lg={6}>
            <div className="LangChangebtn">
              <Dropdown>
                <Dropdown.Toggle
                  variant="primary"
                  id="dropdown-basic"
                  className="btn-lang d-flex align-items-center"
                >
                  American
                  <div className="iconDown">
                    <IoIosArrowDown />
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                 
                  <Link to="#">Indian</Link>
                  <Link to="#">Spanish</Link>
                  <Link to="#">Deustch</Link>
              
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
          <Col lg={6}>
            <div className="text_copyright">
              <ul className="copyrightLinks">
                <li>&copy; Copyright CarPark 2024</li>
                <li>
                  <Link to="#">Cancellation Policy</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#">Terms of use</Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <hr />

        <div className="footer_line">
          <p>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
              iste obcaecati accusantium error iusto animi minus quasi! Nemo,
              est nulla eos eaque, debitis aperiam odit ducimus voluptas magnam
              accusantium aliquam?
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComp;
