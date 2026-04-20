import React from "react";
import "./QuoteForm.css";
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

const QuoteForm = ({button}) => {
  return (
    <>
      <div className="quoteformSec">
        <div className="container">
          <h2>
            Sarah in Luton earns enough to cover her monthly energy bills, what
            could your space pay for?
          </h2>
          <div className="padding-in">
          <div className="greenbg">
            <div className="row">
              <div className="col-lg-3 p-4">
                <h4>See how much spaces in your area can earn!</h4>
              </div>
              <div className="col-lg-9">
                <Form>
                  <Form.Group className="mb-4" controlId="formName">
                    <Form.Control type="text" placeholder="Name" />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formpostcode">
                    <Form.Control
                      type="text"
                      placeholder="Postcode"
                      pattern="[0-9]*"
                      max="99999"
                    />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formBasicEmail">                   
                    <Form.Control type="email" placeholder="Email Address" />                    
                  </Form.Group>
                <div className="quotebtns d-flex mt-4">
                <Link to="#" className="btn-green m-0">           
             {button}           
            </Link>
            <Link to="#" className="btntwo btn-green m-0">
                Rent out your space now
                </Link>
                </div>
           
        

                
                </Form>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuoteForm;
