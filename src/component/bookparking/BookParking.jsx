import React from "react";
import "./BookParking.css";
import image1book from "../../assets/images/image1book.svg";
import hoverimage1book from "../../assets/images/hoverimage1book.svg";
import image2book from "../../assets/images/image2book.svg";
import hoverimage2book from "../../assets/images/hoverimage2book.svg";
import image3book from "../../assets/images/image3book.svg";
import hoverimage3book from "../../assets/images/hoverimage3book.svg";



const BookParking = () => {
  return (
    <div className="BookSec">
      <div className="container">
        <div className="headingOfBook text-center">
          <h3>Why book parking?</h3>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="imagepart">
            <div className="imageforBook">
              <img
                src={image1book}
                width="170px"
                height="170px"
                className="image1forbookparking"
                alt="logo"
              />
              <img
                src={hoverimage1book}
                width="170px"
                height="170px"
                className="image1forbookparkinghover"
                alt="logo"
              />
            </div>

            </div>
            <div className="textforbook">
              <h4>Get closer</h4>
              <p>With over 100k spaces available to book, including driveways, you’ll always be a stone’s throw away from where you need to be.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="imagepart">
            <div className="imageforBook">
              <img
                src={image2book}
                width="170px"
                height="170px"
                className="image1forbookparking"
                alt="logo"
              />
              <img
                src={hoverimage2book}
                width="170px"
                height="170px"
                className="image1forbookparkinghover"
                alt="logo"
              />
            </div>

            </div>
            <div className="textforbook">
              <h4>Park smarter</h4>
              <p>Save time, money & hassle by booking your space before you set out.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="imagepart">
            <div className="imageforBook">
              <img
                src={image3book}
                width="170px"
                height="170px"
                className="image1forbookparking"
                alt="logo"
              />
              <img
                src={hoverimage3book}
                width="170px"
                height="170px"
                className="image1forbookparkinghover"
                alt="logo"
              />
            </div>

            </div>
            <div className="textforbook">
              <h4>Peace of mind</h4>
              <p>Find the best spot, see exactly what you’re paying & even extend your stay - all through our award-winning app.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookParking;
