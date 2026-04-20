import React from "react";
import "./SmartParking.css";
import smart1 from "../../assets/images/smart1.svg";
import smart2 from "../../assets/images/smart2.svg";
import smart3 from "../../assets/images/smart3.svg";

const SmartParking = () => {
  return (
    <>
      <div className="row pt-5">
        <div className="col-lg-4 text-center">
          <img
            src={smart1}
            width="150px"
            height="150px"
            className="image1forbookparking"
            alt="logo"
          />
          <h6>
            Best-in-sector payment processing for pre-booked & on-demand
            customers.
          </h6>
        </div>
        <div className="col-lg-4 text-center">
          <img
            src={smart2}
            width="150px"
            height="150px"
            className="image1forbookparking"
            alt="logo"
          />
          <h6>
          Crucial data insights that will drive your business forward.
          </h6>
        </div>
        <div className="col-lg-4 text-center">
          <img
            src={smart3}
            width="150px"
            height="150px"
            className="image1forbookparking"
            alt="logo"
          />
          <h6>
          CRM and pricing tools to maximise reach and conversion.
          </h6>
        </div>
      </div>
    </>
  );
};

export default SmartParking;
