import React from "react";
import "./NextDestination.css";
import destination1 from "../../assets/images/destination1.svg";
import destination2 from "../../assets/images/destination2.webp";
import destination3 from "../../assets/images/destination3.webp";
import destination4 from "../../assets/images/destination4.svg";
import { Link } from "react-router-dom";

const NextDestination = () => {
  return (
    <>
      <div className="nextdestinationSec">
        <div className="container">
          <div className="greenbg">           
                <h3>Where are you going next?</h3>           
            <div className="row">
              <div className="col-lg-3 mb-4">
                <Link to="#">
                  <div className="grid-layoutfordestination">
                    <div className="imagefordestination text-center">
                      <img
                        src={destination1}
                        width="170px"
                        height="170px"
                        className="d-inline-block align-top"
                        alt="logo"
                      />
                    </div>
                    <div className="namefordestination">
                        <h5>Office</h5>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 mb-3">
              <Link to="#">
                  <div className="grid-layoutfordestination">
                    <div className="imagefordestination text-center">
                      <img
                        src={destination2}
                        width="170px"
                        height="170px"
                        className="d-inline-block align-top"
                        alt="logo"
                      />
                    </div>
                    <div className="namefordestination">
                        <h5>Airports</h5>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 mb-3">
              <Link to="#">
                  <div className="grid-layoutfordestination">
                    <div className="imagefordestination text-center">
                      <img
                        src={destination3}
                        width="170px"
                        height="170px"
                        className="d-inline-block align-top"
                        alt="logo"
                      />
                    </div>
                    <div className="namefordestination">
                        <h5>Stadiums</h5>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 mb-3">
              <Link to="#">
                  <div className="grid-layoutfordestination">
                    <div className="imagefordestination text-center">
                      <img
                        src={destination4}
                        width="170px"
                        height="170px"
                        className="d-inline-block align-top"
                        alt="logo"
                      />
                    </div>
                    <div className="namefordestination">
                        <h5>City Breaks</h5>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NextDestination;
