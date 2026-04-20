import React from "react";
import "./BookGreenbg.css";
import image1book from "../../assets/images/image1book.svg";
import image2book from "../../assets/images/image2book.svg";
import { Link } from "react-router-dom";

const BookGreenbg = ({ button }) => {
  return (
    <>
      <div className="bookgreenSec">
        <div className="container">
          <div className="greenbg">
            <div className="row">
              <div className="col-lg-3 text-center">
                <img
                  src={image1book}
                  width="170px"
                  height="170px"
                  className="image1forbookparking "
                  alt="logo"
                />
              </div>
              <div className="col-lg-6 text-center">
                <h5>Parking sorted in seconds</h5>
                <p>
                  Journeys are simpler with a dedicated space, just for you.
                </p>
                <div className="btn-reviews">
                  <Link to="#" className="btn-green">
                    {button}
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 text-center">
                <img
                  src={image2book}
                  width="170px"
                  height="170px"
                  className="image1forbookparking"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookGreenbg;
