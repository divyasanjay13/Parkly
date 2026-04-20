import React from 'react';
import "./PartnerBlock2.css";
import profile1 from "../../assets/images/profile1.svg";
import profile2 from "../../assets/images/profile2.svg";
import profile3 from "../../assets/images/profile3.svg";

const PartnerBlock2 = () => {
  return (
    <>
    <div className="row pb-5">
        <div className="col-lg-4 mb-3">
            <div className="block text-center">
            <img
                src={profile1}
                width="64px"
                height="64px"
                className="d-inline-block align-top"
                alt="profile"
              />
            <h5>Book in advance</h5>
            <p>Drivers easily pre-book your spaces for a few hours, the full day or as a recurring monthly booking.</p>
            </div>
        </div>
        <div className="col-lg-4 mb-3">
        <div className="block text-center">
            <img
                src={profile2}
                width="64px"
                height="64px"
                className="d-inline-block align-top"
                alt="profile"
              />
            <h5>Book on the move</h5>
            <p>The only app offering on-the-move bookings through Apple CarPlay, Android Auto and voice control.</p>
            </div>
        </div>
        <div className="col-lg-4 mb-3">
        <div className="block text-center">
            <img
                src={profile3}
                width="64px"
                height="64px"
                className="d-inline-block align-top"
                alt="profile"
              />
            <h5>Pay on Arrival / Exit</h5>
            <p>Our best-in-class payment solution lets drivers arriving at your car park pay quickly and securely.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default PartnerBlock2