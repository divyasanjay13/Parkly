import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import func1 from "../../assets/images/func1.png";
import func2 from "../../assets/images/func2.png";
import func3 from "../../assets/images/func3.png";
import "./FunctionCol.css";

const FunctionCol = () => {
  return (
    <>
      <div className="function_colSec">
        <Container>
          <div className="function_colhead">
            <h2>Parking made easy</h2>
          </div>
          <Row>
            <Col lg={4}>
              <div className="col1">
                <div className="image_part">
                  <div className="image">
                    <img
                      src={func1}
                      width="100px"
                      height="100px"
                      className="d-inline-block align-top image"
                      alt="logo"
                    />
                  </div>
                </div>
                <div className="colhead">
                  <h3>Whenever, wherever</h3>
                </div>
                <div className="text-part">
                  <p className="m-2">
                    Choose from millions of spaces across the UK
                  </p>
                  <p className="mt-4">
                    Find your best option for every car journey
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="col1">
                <div className="image_part">
                  <div className="image">
                    <img
                      src={func2}
                      width="100px"
                      height="100px"
                      className="d-inline-block align-top image"
                      alt="logo"
                    />
                  </div>
                </div>
                <div className="colhead">
                  <h3>Peace of mind</h3>
                </div>
                <div className="text-part">
                  <p className="m-2">
                  View information on availability, price and restrictions
                  </p>
                  <p className="mt-4">
                    Find your best option for every car journey
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="col1">
                <div className="image_part">
                  <div className="image">
                    <img
                      src={func3}
                      width="100px"
                      height="100px"
                      className="d-inline-block align-top image"
                      alt="logo"
                    />
                  </div>
                </div>
                <div className="colhead">
                  <h3>Seamless experience</h3>
                </div>
                <div className="text-part">
                  <p className="m-2">
                    Choose from millions of spaces across the UK
                  </p>
                  <p className="mt-4">
                    Find your best option for every car journey
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FunctionCol;
