import React from 'react';
import "./FindSpaceSec.css";
import { FaSearchLocation } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { TbDeviceMobilePin } from "react-icons/tb";
import findyourspaceimg from "../../assets/images/findyourspaceimg.jpg"
import { Link } from 'react-router-dom';




const FindSpaceSec = ({button}) => {
  return (
    <>
    <div className="findspaceSec">
        <div className="container">
            <div className="row ">
                <div className="col-lg-5">
                    <div className="text_findspace">
                    <h3><strong>The simplest way</strong><br/>to book a parking space.</h3>
                    <ul className='pointsofspace'>
                        <li className='d-flex'>
                            <div className="iconforpoints">
                            <FaSearchLocation />
                            </div>
                            <div className="text_points">
                                <h5>Tell us where you’re going</h5>
                                <p>Our super smart app will quickly find the best space for you. And with 100k spaces to choose from, including private driveways, no one gets you closer.</p>
                            </div>
                        </li>
                        <li className='d-flex'>
                            <div className="iconforpoints">
                            <FaCar />
                            </div>
                            <div className="text_points">
                                <h5>Book guaranteed parking in seconds</h5>
                                <p>Our super smart app will quickly find the best space for you. And with 100k spaces to choose from, including private driveways, no one gets you closer.</p>
                            </div>
                        </li>
                        <li className='d-flex'>
                            <div className="iconforpoints">
                            <TbDeviceMobilePin />
                            </div>
                            <div className="text_points">
                                <h5>You’re all set</h5>
                                <p>Our super smart app will quickly find the best space for you. And with 100k spaces to choose from, including private driveways, no one gets you closer.</p>
                            </div>
                        </li>                       
                    </ul>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="imageofspacesec">
                    <img
                src={findyourspaceimg}
                width="100%"
                height="750px"
                className="d-inline-block align-top"
                alt="logo"
              />
                    </div>
                </div>
            </div>
        </div>
        <div className="button-container">
        <Link to="#" className="btn-green">          
             {button}
            </Link>
          
        </div>
    </div>
    </>
  )
}

export default FindSpaceSec