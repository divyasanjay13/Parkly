import React from 'react';
import "./FunctiontwoCols.css";
import functiontwo1 from "../../assets/images/functiontwo1.png";
import functiontwo2 from "../../assets/images/functiontwo2.png";
import functiontwo3 from "../../assets/images/functiontwo3.png";

const FunctiontwoCols = () => {
  return (
    <>
    <div className="functiontwoSec">
<div className="container">
    <h4 className='text-center'>Why rent out your space with Parkly?</h4>

<div className="row">
    <div className="col-lg-4">
        <div className="col_func">
            <div className="img-part text-center">
            <img
                src={functiontwo1}
                width="300px"
                height="280px"
                className="d-inline-block align-top"
                alt="logo"
              />
            </div>
            <div className="text-part">
                <h6>Earn with us</h6>
                <p>Our top hosts make over £4,000 a year renting their driveways. Why not find out what yours could make you today? The first £1,000 is completely tax-free.</p>
            </div>
        </div>
    </div>
    <div className="col-lg-4">
        <div className="col_func">
            <div className="img-part text-center">
            <img
                src={functiontwo2}
                width="300px"
                height="280px"
                className="d-inline-block align-top"
                alt="logo"
              />
            </div>
            <div className="text-part">
                <h6>You're in control</h6>
                <p>Simply choose the days & hours that suit you and set your own price. Then just sit back and watch the bookings roll in. Easy.</p>
            </div>
        </div>
    </div>
    <div className="col-lg-4">
        <div className="col_func">
            <div className="img-part text-center">
            <img
                src={functiontwo3}
                width="300px"
                height="280px"
                className="d-inline-block align-top"
                alt="logo"
              />
            </div>
            <div className="text-part">
                <h6>More than 13 million drivers</h6>
                <p>Our growing community of verified drivers is the largest in the UK, meaning more bookings for you and more cash in your pocket.</p>
            </div>
        </div>
    </div>
</div>
</div>
    </div>
    </>
  )
}

export default FunctiontwoCols