import React from 'react';
import "./Reviews.css";
import TrustedStars from "../Trustedstars/TrustedStars"
import SliderReview2 from '../slider/SliderReview2';

const Reviews = () => {
  return (
    <>
    <div className="reviewsSec">
        <div className="container">
            <div className="headingreviews">
            <h4>What drivers say about us</h4>
            <p><strong>JustPark rated “excellent” on independent review website, Trustpilot.</strong></p>
            <p>Read real reviews from real customers on www.trustpilot.com.</p>
            <div className="trustedstars">
            <TrustedStars />
            </div>
            </div>
            <div className="sliderSecReviews">
           <SliderReview2/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Reviews;