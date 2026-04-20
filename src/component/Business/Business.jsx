import React from "react";
import HeaderComp from "../Header/HeaderComp";
import "./Business.css";
import SmartParking from "../smartparking/SmartParking";
import FullBlock from "../wpblock/FullBlock";
import PartnerBlock from "../partnerblock/PartnerBlock";
import { Link } from "react-router-dom";
import Combinedfunc from "../reserve/Combinedfunc";
import Partnertrust from "../partnerprofilesec/Partnertrust";
import FooterComp from "../Footer/FooterComp";
import PartnerBlock2 from "../partnerblock/PartnerBlock2";
import contactimg from "../../assets/images/contactimg.jpg";

const Business = () => {
  return (
    <>
      <HeaderComp />

      <div className="greenbg_link">
        <Link to="#">Looking for Fleet Management?</Link>
      </div>

      <div className="smartparkSec">
        <div className="container">
          <h2>Give your operation The CarPark advantage</h2>
          <h1>Meet our suite of smart parking solutions</h1>
          <SmartParking />
        </div>
      </div>

      <div className="fullblockSec">
        <div className="container">
          <FullBlock />
        </div>
      </div>

      <Combinedfunc
        button="Explore Reserve"
        colpara1="Put your spaces in front of more than 13 million customers."
        colpara2="Almost two decades of experience, 4.5/5 Trustpilot rating and 96% customer satisfaction score."
        colpara3="Dynamically make spaces available for pre-book to avoid under-utilisation."
        col1name="Revenue Generation"
        col2name="A Trusted name"
        col3name="Maximise Yield"
        headingh2="Maximise revenue & optimise yield by tapping into the UK’s biggest parking marketplace"
        paragraph="The UK’s biggest parking reservation marketplace"
        reserve="../images/playstore.png"
      />

      <PartnerBlock
        partnername="Gavin Povey"
        partnergroup="Group Nexus"
        paraline1="We have now been working with JustPark for a number of years… we have found the performance and service of JustPark to be superior in terms of both revenue generation and booking numbers."
        paraline2="On average, from a total sample size of circa 1,500 bookings, the number of pre-booked events JustPark achieved was on average circa 100% higher than competitors. Bookings peaked at 183% higher on one site with the lowest being 42% higher."
      />

      <Combinedfunc
        button="Explore On-demand "
        colpara1="Seamless payments for all session types – Pay on Arrival, Pay on Exit and AutoPay."
        colpara2="Our app allows customers to quickly extend their stay. Improving their experience – and your bottom line."
        colpara3="Our team are on hand to support customers with any issues, allowing you focus on your core business."
        col1name="Cutting-Edge Technology"
        col2name="Easy Extensions"
        col3name="Reliable Customer Service"
        headingh2="Elevate your customer’s experience with quick payments and extensions"
        paragraph="Seamless and secure parking payments"
      />

      <PartnerBlock
        partnername="Stefanie Hardy"
        partnergroup="Victoria Park Plaza Hotel"
        paraline1="We have worked with JustPark for around 3 years – have always found them very proactive and approachable. The site is extremely well laid out and easy to find information with analysis. I would recommend them as a partner to enhance the revenue of parking spaces."
      />

      <Combinedfunc
        button="Explore Insights "
        colpara1="Insights brings together your operations data into one, unified dashboard."
        colpara2="Make faster, data-driven decisions with instant access to all your performance metrics."
        colpara3="With automated reporting from data sources you can trust, you’ll save time and avoid errors."
        col1name="Centralised Data"
        col2name="Real-time Visibility"
        col3name="Eliminate admin"
        headingh2="Harness the power of data through our world class business intelligence tool"
        paragraph="World-class business intelligence tool"
      />

      <div className="partnerprofileSec">
        <div className="container">
          <h2 className="text-center mb-5">
            People who <strong>trust</strong> us.
          </h2>
          <Partnertrust />
        </div>
      </div>

      <Combinedfunc
        button="Explore Optimize "
        colpara1="Price optimisation results in high-margin revenue gains."
        colpara2="Generate competitive pricing, serving each customer’s unique needs."
        colpara3="Remove the need for manual pricing, research and administration."
        col1name="Boost revenue"
        col2name="Increase customer satisfaction"
        col3name="Save time"
        headingh2="Fine-tune your pricing strategy for optimal revenue generation"
        paragraph="Automated dynamic and surge pricing"
      />

      <div className="partnerprofileSec">
        <div className="container">
          <h2 className="text-center mb-5">
            We connect you to <strong>all</strong> driver profiles
          </h2>
          <PartnerBlock2 />
        </div>
      </div>

      <Combinedfunc
        button="Explore Reach "
        colpara1="Seamless payments for all session types – Pay on Arrival, Pay on Exit and AutoPay,"
        colpara2="Use our sophisticated tool to segment your audience & deliver the right message at the right time."
        colpara3="See the positive impact on both your top and bottom lines as your clients leverage Reach."
        col1name="Drive behaviour"
        col2name="Bespoke messaging"
        col3name="Revenue sharing"
        headingh2="Engage your customers like never before with our cutting-edge CRM platform"
        paragraph="Cutting-edge CRM engagement capabilities"
      />

      <div className="contactSec">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-4">
              <h2>
                Contact <br /> <span>CarPark</span> Business
              </h2>
              <p className="mt-5">
                Our expert team is here to help. <br />
                Complete this form and someone <br />
                will be in touch as soon as possible.
              </p>
              <p className="mt-3">Or give us a call on</p>
              <h4>+44 20 3835 5995</h4>
            </div>
            <div className="col-lg-6">
                <img src={contactimg} alt="contact" width="100%" height="400px" />
            </div>
          </div>
        </div>
      </div>


      <FooterComp/>
    </>
  );
};

export default Business;
