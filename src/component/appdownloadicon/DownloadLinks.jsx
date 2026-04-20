import React from "react";
import "./DownloadLinks.css";
import appstore from "../../assets/images/appstore.png";
import playstore from "../../assets/images/playstore.png";
import { Link } from "react-router-dom";

const DownloadLinks = () => {
  return (
    <>
    
      <div className="appLinks">
        <Link
         to=" "
          target="_blank"
          rel="noopener noreferrer"
          className="store-button app-store-button"
        >
          <div className="store-buttons">
            <div className="img_icon">
              <img
                src={appstore}
                width="30px"
                height="30px"
                className="d-inline-block align-top"
                alt="logo"
              />
            </div>
            <div className="text_icon">
              Download on the <br />
              <span>App Store</span>
            </div>
          </div>
        </Link>

        <Link
         to="https://play.google.com/store/apps/details?id=your.app.id"
          target="_blank"
          rel="noopener noreferrer"
          className="store-button google-play-button"
        >
          <div className="store-buttons">
            <div className="img_icon">
              <img
                src={playstore}
                width="30px"
                height="30px"
                className="d-inline-block align-top"
                alt="logo"
              />
            </div>
            <div className="text_icon">
              GET IT ON <br />
              <span>Google Play</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default DownloadLinks;
