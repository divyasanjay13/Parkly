import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TabsTwo from "../ParkTabs/TabsTwo";
// import { HiCurrencyDollar } from "react-icons/hi";
// import { FaThumbsUp } from "react-icons/fa";
// import { FaCar } from "react-icons/fa";
// import carBanner from '../../assets/images/carBanner.jpg';
 import workspagebannerimg from '../../assets/images/workspagebannerimg.jpg';

const BannerTwo = ({greentexthead,blacktexthead,paragraphtextbanner}) => {
  return (
    <>
    <div className="BannerSec">
      <Container>
        <Row className="justify-content-between">
          <Col lg={6}>
            <div className="parkspaceList">
              <h1>
                <span>{greentexthead}</span> {blacktexthead}
              </h1>             
              <p>
                {paragraphtextbanner}
              </p>
            </div>
            <TabsTwo />
          </Col>
          <Col lg={6}>
          <img src={workspagebannerimg} 
          width="100%"
          height="700px"
          />
          </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default BannerTwo;