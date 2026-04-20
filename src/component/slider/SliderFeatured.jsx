import React from 'react';
import './SliderFeatured.css'

export default function SliderFeatured() {
  return (
    <>
    <div className="sliderfeaturedSec">
    <swiper-container breakpoints={
            JSON.stringify({
                
                640:{
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
    
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
              
    
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                }
            })
        } 
        >

            <swiper-slide>
                <div className="greenbg">
                    <div className="customer_comments">
                        <p><span>Parkly has been instrumental in making St John’s a central hub of the community once again.</span></p>
                    </div>
                    <p className="customername">
                    Rev Graham Hunter
                    </p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div className="greenbg">
                    <div className="customer_comments">
                        <p><span>Parkly has been instrumental in making St John’s a central hub of the community once again.</span></p>
                    </div>
                    <p className="customername">
                    Rev Graham Hunter
                    </p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div className="greenbg">
                    <div className="customer_comments">
                        <p><span>Parkly has been instrumental in making St John’s a central hub of the community once again.</span></p>
                    </div>
                    <p className="customername">
                    Rev Graham Hunter
                    </p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div className="greenbg">
                    <div className="customer_comments">
                        <p><span>Parkly has been instrumental in making St John’s a central hub of the community once again.</span></p>
                    </div>
                    <p className="customername">
                    Rev Graham Hunter
                    </p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div className="greenbg">
                    <div className="customer_comments">
                        <p><span>Parkly has been instrumental in making St John’s a central hub of the community once again.</span></p>
                    </div>
                    <p className="customername">
                    Rev Graham Hunter
                    </p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div className="greenbg">
                    <div className="customer_comments">
                        <p><span>Parkly has been instrumental in making St John’s a central hub of the community once again.</span></p>
                    </div>
                    <p className="customername">
                    Rev Graham Hunter
                    </p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div className="greenbg">
                    <div className="customer_comments">
                        <p><span>Parkly has been instrumental in making St John’s a central hub of the community once again.</span></p>
                    </div>
                    <p className="customername">
                    Rev Graham Hunter
                    </p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div className="greenbg">
                    <div className="customer_comments">
                        <p><span>Parkly has been instrumental in making St John’s a central hub of the community once again.</span></p>
                    </div>
                    <p className="customername">
                    Rev Graham Hunter
                    </p>
                </div>
            </swiper-slide>
          
            </swiper-container>
    </div>
    </>
  )
}

