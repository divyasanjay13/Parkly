import React from 'react';
import "./RentSpace.css";
import HeaderComp from '../Header/HeaderComp';
import QuoteForm from '../quoteform/QuoteForm';
import SectionStats from '../sectionstats/SectionStats';
import FeaturedSec from '../featuredsection/FeaturedSec';
import Timeline from '../timeline/Timeline';
import FunctiontwoCols from '../functionsCols/FunctiontwoCols';
import Faqtwo from '../Faq/Faqtwo';
import FooterComp from '../Footer/FooterComp.jsx';



const RentSpace = () => {
  return (
    <>
    <HeaderComp/>
    <QuoteForm button="Get a quote"/>
    <SectionStats/>
    <FeaturedSec/>
    <Timeline/>
    
    <FunctiontwoCols/>
    <Faqtwo/>
    <FooterComp/>
    
    </>
  )
}

export default RentSpace