import React from 'react';
import "./PartnerBlock.css";
 import { BiSolidQuoteLeft } from "react-icons/bi";
 import { BiSolidQuoteRight } from "react-icons/bi";

import dp1 from "../../assets/images/dp1.jpg";


const PartnerBlock = ({partnergroup, partnername, paraline1,paraline2}) => {
  return (
    <>
     <div className="partnerprofileSec">
     <div className="container">
    <div className="row justify-content-between">
      <div className="col-lg-3 d-flex justify-content-center align-items-center">
        <div className="border-green">
          <img src={dp1} alt="partner" width="100%" height="100%" className='partner' />
        </div>
      </div>
      <div className="col-lg-3">
        <div className="name_partner d-flex justify-content-center flex-column">
          <h2>{partnername}</h2>
          <h6>{partnergroup}</h6>
        </div>
      </div>
      <div className="col-lg-5">
    <div className="quote_left">
    <BiSolidQuoteLeft />
    </div>
        <p>{paraline1}</p>
        <p>{paraline2}</p>
        <div className="quote_right text-end">
        <BiSolidQuoteRight />
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default PartnerBlock