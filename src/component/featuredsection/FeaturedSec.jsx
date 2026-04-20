import React from 'react';
import "./FeaturedSec.css";
import bbcimg from "../../assets/images/bbcimg.png";
import tcimg from "../../assets/images/tcimg.png";
import thesunimg from "../../assets/images/thesunimg.png";
import thetelegraphimg from "../../assets/images/thetelegraphimg.png";
import forbesimg from "../../assets/images/forbesimg.png";
import SliderFeatured from '../slider/SliderFeatured';
import { Link } from 'react-router-dom';

const FeaturedSec = () => {
  return (
   <>
   <div className="featuredSec">
    <div className="container">
        <div className="headingfeatured text-center">
        <h5>Don’t just take our word for it</h5>
        <p>With a Trustpilot rating of 4.5/5 we’re the UK’s most trusted parking app.</p>
        </div>
        <p className='text-center mt-4 mb-4'><span>Featured on</span></p>
        <div className="imageslogo_featured d-flex justify-content-between p-5">
        <img
                src={bbcimg}
                width="85px"
                height="24px"
                className="d-inline-block align-top"
                alt="logo"
              />
        <img
                src={tcimg}
                width="85px"
                height="24px"
                className="d-inline-block align-top"
                alt="logo"
              />
        <img
                src={thesunimg}
                width="85px"
                height="24px"
                className="d-inline-block align-top"
                alt="logo"
              />
        <img
                src={thetelegraphimg}
                width="85px"
                height="24px"
                className="d-inline-block align-top"
                alt="logo"
              />
        <img
                src={forbesimg}
                width="85px"
                height="24px"
                className="d-inline-block align-top"
                alt="logo"
              />
        </div>
      <div className="sliderfeaturedsec mb-5">
      <SliderFeatured/>
      </div>
      <div className="text-center">
      <Link to="" className="btn-green">
See what you could earn
      </Link>

      </div>


    </div>
   </div>
   </>
  )
}

export default FeaturedSec;