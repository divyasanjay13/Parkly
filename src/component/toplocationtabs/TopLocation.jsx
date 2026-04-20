import React from "react";
import "./TopLocation.css";
import { Container, Row, Col, Tab,Tabs } from "react-bootstrap";

const TopLocation = () => {
  return (
    <>
      <div className="toplocationSec">
        <Container>
          <Col lg={4}>
            <h4>Top Location</h4>
          </Col>

          <div className="tabLocation">
            <Tabs
              defaultActiveKey="Popular Attractions"
              id="fill-tab-example"
              className="mb-3"
              
            >
              <Tab eventKey="Popular Attractions" title="Popular Attractions">
                <div className="listofnames">
                    <Row>
                        <Col lg={3}>
                        <ul>
                            <li>Wembly Stadium</li>
                            <li>London Eye</li>
                            <li>Hyde Park</li>
                            <li>London Zoo</li>
                            <li>Wembly Stadium</li>
                           
                            
                        </ul>
                        </Col>
                        <Col lg={3}>
                        <ul>
                            <li>Wembly Stadium</li>
                            <li>O2 Arena</li>
                            <li>Tower of london</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                        </ul>
                        </Col>
                        <Col lg={3}>
                        <ul>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                        </ul>
                        </Col>
                        <Col lg={3}>
                        <ul>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                        </ul>
                        </Col>
                    </Row>
                </div>
              </Tab>
              <Tab eventKey="Cities" title="Cities">
              <div className="listofnames">
                    <Row>
                        <Col lg={3}>
                        <ul>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                        </ul>
                        </Col>
                        <Col lg={3}>
                        <ul>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                        </ul>
                        </Col>
                        <Col lg={3}>
                        <ul>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                        </ul>
                        </Col>
                        <Col lg={3}>
                        <ul>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                        </ul>
                        </Col>
                    </Row>
                </div>
              </Tab>
              <Tab eventKey="Aiports" title="Airports">
              <div className="listofnames">
                    <Row>
                        <Col lg={3}>
                        <ul>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                        </ul>
                        </Col>
                        <Col lg={3}>
                        <ul>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                        </ul>
                        </Col>
                        <Col lg={3}>
                        <ul>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                        </ul>
                        </Col>
                        <Col lg={3}>
                        <ul>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                        </ul>
                        </Col>
                    </Row>
                </div>
              </Tab>
              <Tab eventKey="Train Stations" title="Train Stations">
              <div className="listofnames">
                    <Row>
                        <Col lg={3}>
                        <ul>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                        </ul>
                        </Col>
                        <Col lg={3}>
                        <ul>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                        </ul>
                        </Col>
                        <Col lg={3}>
                        <ul>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                        </ul>
                        </Col>
                        <Col lg={3}>
                        <ul>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                        </ul>
                        </Col>
                    </Row>
                </div>
              </Tab>
              <Tab eventKey="Sports Stadiums" title="Sports Stadiums">
              <div className="listofnames">
                    <Row>
                        <Col lg={3}>
                        <ul>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                        </ul>
                        </Col>
                        <Col lg={3}>
                        <ul>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                        </ul>
                        </Col>
                        <Col lg={3}>
                        <ul>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                        </ul>
                        </Col>
                        <Col lg={3}>
                        <ul>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                            <li>Wembly Stadium</li>
                        </ul>
                        </Col>
                    </Row>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Container>
      </div>
    </>
  );
};

export default TopLocation;
