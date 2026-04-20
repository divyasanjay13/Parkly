import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./BannerComp.css";
import ParkTabs from "../ParkTabs/ParkTabs";
import { HiCurrencyDollar } from "react-icons/hi";
import { FaThumbsUp } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import carBanner from '../../assets/images/carBanner.jpg';

const BannerComp = ({greentexthead,blacktexthead,paragraphtextbanner}) => {
  return (
    <>
    <div className="BannerSec">
      <Container>
        <Row>
          <Col xl={7} lg={7} >
            <div className="parkspaceList">
              <h1>
                <span>{greentexthead}</span> {blacktexthead}
              </h1>
              <ul className="func_list">
                <li className="d-flex align-items-center">
                  <div className="funcIconCircle">
                   <div className="func_icon">
                   <HiCurrencyDollar />
                   </div>
                  </div>
                  Best Price Guarantee
                </li>
                <li className="d-flex align-items-center">
                  <div className="funcIconCircle">
                  <div className="func_icon">
                  <FaThumbsUp />
                   </div>
                  </div>
                  Trusted By 13m+ drivers
                </li>
                <li className="d-flex align-items-center">
                  <div className="funcIconCircle">
                  <div className="func_icon">
                  <FaCar />
                   </div>
                  </div>
                  100k+ reservable spaces
                </li>
              </ul>
              <p>
                {paragraphtextbanner}
              </p>
            </div>
            <ParkTabs />
          </Col>
          <Col xl={5} lg={5}>
          <img src={carBanner} 
          width="100%"
          height="700px"
          />
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default BannerComp;
