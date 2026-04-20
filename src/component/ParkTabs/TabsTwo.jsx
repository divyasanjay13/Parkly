import React from 'react';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import PickDate from "../datepicker/PickDate";
import DropRadio from "../dropdown/DropRadio";
import { Col } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { CiLocationArrow1 } from "react-icons/ci";
import "./TabsTwo.css";
import { Link } from 'react-router-dom';


const TabsTwo = () => {  
  return (
    <>
      <div className="parkingSpaceSec parkingspacetwo">
        <Tabs
          defaultActiveKey="Hours/Daily"
          id="uncontrolled-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="Hours/Daily" title="Hourly/Daily">
            <div className="tabContent">
              <div className="loc_Searchbar">
                <div className="input_container d-flex">
                 <div className="location_icon">
                 <IoLocationSharp />
                 </div>
                  <input
                    type="text"
                    placeholder="Enter a place or a Zip Code"
                    className="search"
                  />       
                  <div className="location_arrowicon">
                  <CiLocationArrow1 />
                    </div>          
                </div>
              </div>
              {/* Date and time picker section */}
              <div className="detailsoftime justify-content-between d-flex">
                <div className="loc_Searchbar dateandtime_picker">
                  <Col lg={12} className="input_container">
                    <p>
                      <span>From</span>
                    </p>
                    <PickDate />
                  </Col>
                  <div className="dropdown_icon">
                    <IoIosArrowDown />
                  </div>
                </div>

                <div className="arrow_right">
                  <FaArrowRight />
                </div>

                <div className="loc_Searchbar dateandtime_picker">
                  <Col lg={12} className="input_container">
                    <p>
                      <span>To</span>
                    </p>
                    <PickDate />
                  </Col>
                  <div className="dropdown_icon">
                    <IoIosArrowDown />
                  </div>
                </div>
              </div>
              {/* Date and time picker ends */}
            </div>
          </Tab>
          <Tab eventKey="Monthly" title="Monthly">
            <div className="tabContent">
              <div className="loc_Searchbar">
              <div className="input_container d-flex">
                 <div className="location_icon">
                 <IoLocationSharp />
                 </div>
                  <input
                    type="text"
                    placeholder="Enter a place or a Zip Code"
                    className="search"
                  />       
                  <div className="location_arrowicon">
                  <CiLocationArrow1 />
                    </div>          
                </div>
              </div>

              {/* Date and time picker section */}
              <div className="detailsoftime justify-content-between d-flex">
                <div className="loc_Searchbar dateandtime_picker">
                  <Col lg={12} className="input_container">
                    <p>
                      <span>From</span>
                    </p>
                    <PickDate />
                  </Col>
                  <div className="dropdown_icon">
                    <IoIosArrowDown />
                  </div>
                </div>

                <div className="arrow_right">
                  <FaArrowRight />
                </div>

                <div className="loc_Searchbar dateandtime_picker">
                  <Col lg={12} className="input_container">                    
                    <DropRadio/>
                  </Col>
                  <div className="dropdown_icon">
                    <IoIosArrowDown />
                  </div>
                </div>
              </div>
              {/* Date and time picker ends */}
            </div>
          </Tab>        
        </Tabs>
        <Link to="#" className="btn-green">             
            Show parking spaces
          </Link>
        
      </div>
    </>
  )
}

export default TabsTwo;