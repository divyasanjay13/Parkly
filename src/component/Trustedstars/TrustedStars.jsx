import React from 'react';
import "./TrustedStars.css";
import { IoStar } from "react-icons/io5";

const TrustedStars = () => {
  return (
   <>
     
        <div className="stars">
                <div className="icon_star">
                  <IoStar /> Trustpilot
                </div>
                <div className="clientStars">
                  <ul className="d-flex align-items-center">
                    <li>
                      <div className="icon_box">
                        <IoStar />
                      </div>
                    </li>
                    <li>
                      <div className="icon_box">
                        <IoStar />
                      </div>
                    </li>
                    <li>
                      <div className="icon_box">
                        <IoStar />
                      </div>
                    </li>
                    <li>
                      <div className="icon_box">
                        <IoStar />
                      </div>
                    </li>
                    <li>
                      <div className="icon_box halfstar">
                        <IoStar />
                      </div>
                    </li>
                  </ul>
                </div>
        </div>

                <div className="textpart">
                  <p>
                    <span>
                      TrustScore <b>4.5</b>
                    </span>
                  </p>
                  <p>
                    <span>
                      <b>125,107</b> reviews
                    </span>
                  </p>
                </div>
             
   </>
  )
}

export default TrustedStars;