import React from "react";
import "./Clipbg.css";
import { Link } from "react-router-dom";

const Clipbg = ({title,desc,button}) => {
  return (
    <>
      <div className="background_clipSec">
        <div className="background_image"></div>
        <div className="textbackground">
          <h3>{title}</h3>
          <p className="mb-4">{desc}</p>
          <Link to="#" className="btn-green">             
             {button}
            </Link>         
        </div>
      </div>
    </>
  );
};

export default Clipbg;
