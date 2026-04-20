import React from 'react';
import HeaderTwo from '../Header/HeaderTwo'
import BannerTwo from '../Banner/BannerTwo';
import "./WorksPage.css";
import SectionStats from '../sectionstats/SectionStats';
import GreenSpace from '../greenspace/GreenSpace';
import VideoSec from '../vidosection/VideoSec';
import FindSpaceSec from '../findspacesec/FindSpaceSec';
import BookParking from '../bookparking/BookParking';
import NextDestination from '../nextdestination/NextDestination';
import Faq from '../Faq/Faq';
import Reviews from '../reviews/Reviews';
import BookGreenbg from '../bookgreenbg/BookGreenbg';
import FooterComp from '../Footer/FooterComp';


const WorksPage = () => {
  return (
   <>
   <HeaderTwo/>
   <div className="banner_reverse">
   <BannerTwo blacktexthead="Parking sorted in seconds" paragraphtextbanner="Simply enter where & when you'll need parking and we'll find the perfect space for you."/>
   </div>
   <SectionStats/>
   <GreenSpace/>
   <VideoSec/>
   <FindSpaceSec button="Find your space"/>
   <BookParking/>
   <NextDestination/>
   <Faq/>
  <Reviews/>
  <BookGreenbg button="Find your space"/>
  <FooterComp/> 
   </>
  )
}

export default WorksPage;