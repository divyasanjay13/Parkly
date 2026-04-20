import React from 'react';
import "./Partnertrust.css";
import partnerlogo1 from "../../assets/images/partnerlogo1.webp";
import partnerlogo2 from "../../assets/images/partnerlogo2.webp";
import partnerlogo3 from "../../assets/images/partnerlogo3.webp";
import partnerlogo4 from "../../assets/images/partnerlogo4.webp";
import partnerlogo5 from "../../assets/images/partnerlogo5.webp";
import partnerlogo6 from "../../assets/images/partnerlogo6.webp";

const Partnertrust = () => {
  return (
    <div className="white_bg">
        <div className="row">
            <div className="col-lg-4">
<ul className='partnerlogocol text-center'>
    <li> <img src={partnerlogo1} alt="partner" width="100px" height="50px" className='partner' /></li>
    <li> <img src={partnerlogo2} alt="partner" width="100px" height="50px" className='partner' /></li>
    <li> <img src={partnerlogo3} alt="partner" width="60px" height="50px" className='partner' /></li>
    <li> <img src={partnerlogo4} alt="partner" width="100px" height="50px" className='partner' /></li>
</ul>
            </div>
            <div className="col-lg-4">
            <ul className='partnerlogocol text-center'>
    <li> <img src={partnerlogo5} alt="partner" width="130px" height="50px" className='partner' /></li>
    <li> <img src={partnerlogo6} alt="partner" width="100px" height="50px" className='partner' /></li>
    <li> <img src={partnerlogo3} alt="partner" width="60px" height="50px" className='partner' /></li>
    <li> <img src={partnerlogo4} alt="partner" width="100px" height="50px" className='partner' /></li>
</ul>
            </div>
            <div className="col-lg-4">
            <ul className='partnerlogocol text-center'>
    <li> <img src={partnerlogo1} alt="partner" width="100px" height="50px" className='partner' /></li>
    <li> <img src={partnerlogo2} alt="partner" width="100px" height="50px" className='partner' /></li>
    <li> <img src={partnerlogo6} alt="partner" width="100px" height="50px" className='partner' /></li>
    <li> <img src={partnerlogo5} alt="partner" width="130px" height="50px" className='partner' /></li>
</ul>
            </div>
        </div>
    </div>
  )
}

export default Partnertrust