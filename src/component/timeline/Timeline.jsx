import React from 'react';
import './Timeline.css';
import findyourspaceimg from "../../assets/images/findyourspaceimg.jpg"

const Timeline = () => {
  return (
   <>
   <div className="timelineSec">
    <div className="container">
        <div className="headingtimeline text-center">
            <h4>Being a JustPark host</h4>
            <h5>Turn your driveway into a simple, passive source of income.</h5>
        </div>
        <div className="timeline_content mt-5">
            <div className="row">
                <div className="col-lg-4 ">
                    <div className="col d-flex align-items-center ">
                    <div className="surveydetails">
                        <h5>£4,000 per year</h5>
                        <p>being earned by our top hosts each year.</p>
                    </div>
                    <div className="arrows_survey">
                        <div className="line"></div>
                        <div className="circle_arrow"></div>
                    </div>
                    </div>
                    <div className="col d-flex align-items-center ">
                    <div className="surveydetails">
                        <h5>£50 million+</h5>
                        <p>earned by our hosts since we began our journey.</p>
                    </div>
                    <div className="arrows_survey">
                        <div className="line"></div>
                        <div className="circle_arrow"></div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 d-flex justify-content-center">
                    <div className="circle_image">
                    <img
                src={findyourspaceimg}
                width="100%"
                height="100%"
                className="d-inline-block align-top"
                alt="logo"
              />
                    </div>
                </div>
                <div className="col-lg-4 ">
                    <div className="col d-flex align-items-center flex-row-reverse">
                    <div className="surveydetails">
                        <h5>13 million+</h5>
                        <p>drivers trust us to find them parking.</p>
                    </div>
                    <div className="arrows_survey">
                        <div className="circle_arrow"></div>
                        <div className="line"></div>
                    </div>
                    </div>
                    <div className="col d-flex align-items-center flex-row-reverse ">
                    <div className="surveydetails">
                        <h5>45,000+</h5>
                        <p>hosts already earning from their driveway.</p>
                    </div>
                    <div className="arrows_survey">
                        <div className="circle_arrow"></div>
                        <div className="line"></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Timeline