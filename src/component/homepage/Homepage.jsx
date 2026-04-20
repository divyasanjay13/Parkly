import React from "react";
import HeaderComp from "../Header/HeaderComp";
import BannerComp from "../Banner/BannerComp";
import FooterComp from "../Footer/FooterComp";
import SliderReview from "../slider/SliderReview";
import { Col, Row } from "react-bootstrap";
import "./Homepage.css";
import FunctionCol from "../functionsCols/FunctionCol";
import TwoCols from "../twocols/TwoCols";
import Clipbg from "../fullbackground/Clipbg";
import TopLocation from "../toplocationtabs/TopLocation";
import TrustedStars from "../Trustedstars/TrustedStars";
function Homepage() {
  return (
    <>
      <HeaderComp />
                       
      <BannerComp greentexthead="The smart parking" blacktexthead="to find parking." paragraphtextbanner=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque assumenda aliquid, quidem a illum aperiam molestias, mollitia velit deleniti temporibus quisquam esse dolores." />
      <div className="sliderSec ">
        <Row>
          <div className="customstarbox d-flex">
            <Col lg={3} md={4}>
            <div className="trustedblock">
           <TrustedStars/>
            </div>
            </Col>
            <Col lg={10} md={12}>
              <div className="sliderpart">
                <SliderReview />
              </div>
            </Col>
          </div>
        </Row>
      </div>

      <FunctionCol />
      <TwoCols />
      <Clipbg
        title="Rent out your parking or EV charging space"
        desc="Make easy tax free money by renting out your parking or EV charging space. It‘s free to list and only takes a few minutes to get up and running."
        button="Learn how to earn today"
      />
      <div className="fullbackgroundtwo">
        <Clipbg title="Car park management" desc="Maximise yield from underused car parks and vacant land, or transform payments with the UK’s favorite parking app." button="Learn about our solutions" />
      </div>
      <TopLocation/>
      <FooterComp />
    </>
  );
}

export default Homepage;
