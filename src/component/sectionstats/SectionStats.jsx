import React from 'react';
import "./SectionStats.css";

const SectionStats = () => {
  return (
   <>
   <div className="statsec mobNone">
<div className="container">
    <div className="row justify-content-between pt-3 pb-2">
        <div className="col">
            <div className="txt">
<h4>96%</h4>
<h6>satisfaction rate</h6>
            </div>
        </div>
        <div className="col">
        <div className="txt">
<h4>13 million+</h4>
<h6>drivers</h6>
            </div>
        </div>
        <div className="col">
        <div className="txt">
<h4>45,000</h4>
<h6>space owners</h6>
            </div>
        </div>
        <div className="col">
        <div className="txt">
<h4>2 million+</h4>
<h6>bookings per year</h6>
            </div>
        </div>
    </div>
</div>
   </div>
   </>
  )
}

export default SectionStats