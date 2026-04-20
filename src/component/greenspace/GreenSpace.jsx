import React from 'react';
import "./GreenSpace.css";
import greensectionimg from "../../assets/images/greensectionimg.png";

const GreenSpace = () => {
  return (
   <>
   <div className="greenSection">
    <div className="container">
    <div className="greenbg">
        <div className="row justify-content-between align-items-center p-4">
            

            <div className="col-lg-5 justify-content-center d-flex">
<div className="icon_bigcircle">
<img
                src={greensectionimg}
                width="344px"
                height="300px"
                className="d-inline-block align-top"
                alt="logo"
              />
</div>
            </div>
            <div className="col-lg-7">
                <div className="textgreenpart">
                <h3><strong>Guarantee your space</strong><br/>before you set off.</h3>
                <p>Our huge network of bookable parking spaces & driveways gets you closer to where you need to be. By reserving your parking, you’ll save time & money on all your journeys, whether it’s your daily commute, an evening gig or a weekend away.</p>
                </div>
            </div>
            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default GreenSpace