import React from 'react';
import "./ReserveSec.css";
import { FaArrowRight } from "react-icons/fa";
import reserveimg1 from "../../assets/images/reserveimg1.svg";
import reserveimg2 from "../../assets/images/reserveimg2.svg";
import reserveimg3 from "../../assets/images/reserveimg3.svg";
import reserve from "../../assets/images/reserve.svg";
import reserveLap from "../../assets/images/reserveLap.webp";
import { Link } from 'react-router-dom';



const Combinedfunc = ({button, paragraph,headingh2,col1name,col2name ,col3name,colpara1, colpara2, colpara3}) => {
  return (
    <>
      <div className="reserveSec">
        <div className="container text-center">
        <img
                src={reserve}
                width="140px"
                height="140px"
                className="reserve"
                alt="reserve"
              />
              <p>{paragraph}</p>
              <img
                src={reserveLap}
                width="450px"
                height="270px"
                className="reservelap mt-5 mb-5"
                alt="reserve"
              />
              <h2>{headingh2}
              </h2>
              <hr />

        <div className="row pt-4 pb-5">
    <div className="col-lg-4 mb-3">
        <img src={reserveimg1} className='reserveimg' width="80px" height="80px" alt="reserveimg" />
        <h5 className='mt-4 mb-4'>{col1name}</h5>
        <p >{colpara1}</p>
    </div>
    <div className="col-lg-4 mb-3">
        <img src={reserveimg2} className='reserveimg' width="80px" height="80px" alt="reserveimg" />
        <h5 className='mt-4 mb-4'>{col2name}</h5>
        <p >{colpara2}</p>
    </div>
    <div className="col-lg-4 mb-3">
        <img src={reserveimg3} className='reserveimg' width="80px" height="80px" alt="reserveimg" />
        <h5 className='mt-4 mb-4'>{col3name}</h5>
        <p >{colpara3}</p>
    </div>
</div>
              <Link to="#" className="btn-green">          
           {button} <i className='fa-arrow-right'><FaArrowRight /></i>
            </Link>
        </div>
    </div>
    </>
  )
}

export default Combinedfunc