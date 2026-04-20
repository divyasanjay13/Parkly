import React from "react";
import "./ParkTabs.css";
import PickDate from "../datepicker/PickDate";
import { Col } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FaSearch } from "react-icons/fa";
import { FaPlaneUp } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ParkTabs = () => {
  return (
    <>
      <div className="parkingSpaceSec">
        <Tabs
          defaultActiveKey="Hours/Daily"
          id="uncontrolled-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="Hours/Daily" title="Hourly/Daily">
            <div className="tabContent">
              <div className="loc_Searchbar">
                <div className="input_container">
                  <p>
                    <span>Park at</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Enter a place or a Zip Code"
                    className="search"
                  />
                  <div className="search_icon">
                    <FaSearch />
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
                      <span>Until</span>
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
                <div className="input_container">
                  <p>
                    <span>Park at</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Enter a place or a Zip Code"
                    className="search"
                  />
                  <div className="search_icon">
                    <FaSearch />
                  </div>
                </div>
              </div>

              {/* Date and time picker section */}
              <div className="detailsoftime justify-content-between d-flex">
                <div className="loc_Searchbar dateandtime_picker">
                  <Col lg={12} className="input_container">
                    <p>
                      <span>Starting on</span>
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
                      <span>Monthly duration</span>
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
          <Tab
            eventKey="contact"
            title={
              <span>
                <div className="icon_plane">
                  <FaPlaneUp />
                </div>
                Airport
              </span>
            }
          >
            <div className="tabContent">
              <div className="loc_Searchbar">
                <Col lg={12} className="input_container">
                  <p>
                    <span>Departure airpot</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Flying from"
                    className="search"
                  />
                  <div className="dropdown_icon">
                    <IoIosArrowDown />
                  </div>
                </Col>
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
                      <span>Until</span>
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
        </Tabs>
        <Link to="#" className="btn-green">            
            Show parking spaces
          </Link>
       
      </div>
    </>
  );
};

export default ParkTabs;
