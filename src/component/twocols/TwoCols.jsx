import React from "react";
import "./TwoCols.css";
import DownloadLinks from "../appdownloadicon/DownloadLinks";
import { Container, Row, Col } from "react-bootstrap";
import mobilephone from '../../assets/images/mobilephone.png';

const TwoCols = () => {
  return (
    <>
      <div className="downloadSec">
        <Container>
          <Row className="align-items-center">
            <Col lg={7}>
              <div className="downloadapp_content">
                <h3>Download the UK's favourite parking app</h3>

                <p>
                  Rated 5 stars with an average satisfaction rating of 96%,
                  JustPark is the US's favorite parking service. But don’t just
                  take our word for it – check out some of the latest customer
                  reviews below for our London parking spaces.
                </p>
                <div className="download_links">
                  <DownloadLinks/>
                </div>
              </div>
            </Col>
            <Col lg={5}>
            <img
              src={mobilephone}             
              width="100%"
             height="100%"
              className="d-inline-block align-top"
              alt="mobilephone"
            />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default TwoCols;
