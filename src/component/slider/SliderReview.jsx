import React from 'react';
import "./SliderReview.css"


export default function SliderReview() {
    return (
      <>
  
      <main>
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
                    slidesPerView: 6,
                    spaceBetween: 25,
                }
            })
        }>
            <swiper-slide>
                <div className="slider_review">
                 <div className="location_text">
                 <span className='name'><b>Caroline S </b>  </span>
                 <span className='company_name'>JustParked at</span>
                 <span className='fairname'> Q Park Mayfair Car Park</span>
                 </div>
                 <span className='comment_client'>"Easy to follow instructions. Plenty of parking spaces and very secure Would highly recommend."</span>
                </div>
            </swiper-slide>
            <swiper-slide>
            <div className="slider_review">
                 <div className="location_text">
                 <span className='name'><b>Caroline S </b>  </span>
                 <span className='company_name'>JustParked at</span>
                 <span className='fairname'> Q Park Mayfair Car Park</span>
                 </div>
                 <span>"Easy to follow instructions. Plenty of parking spaces and very secure Would highly recommend."</span>
                </div>
            </swiper-slide>
            <swiper-slide>
            <div className="slider_review">
                 <div className="location_text">
                 <span className='name'><b>Caroline S </b>  </span>
                 <span className='company_name'>JustParked at</span>
                 <span className='fairname'> Q Park Mayfair Car Park</span>
                 </div>
                 <span>"Easy to follow instructions. Plenty of parking spaces and very secure Would highly recommend."</span>
                </div>
            </swiper-slide>
            <swiper-slide>
            <div className="slider_review">
                 <div className="location_text">
                 <span className='name'><b>Caroline S </b>  </span>
                 <span className='company_name'>JustParked at</span>
                 <span className='fairname'> Q Park Mayfair Car Park</span>
                 </div>
                 <span>"Easy to follow instructions. Plenty of parking spaces and very secure Would highly recommend."</span>
                </div>
            </swiper-slide>
            <swiper-slide>
            <div className="slider_review">
                 <div className="location_text">
                 <span className='name'><b>Caroline S </b>  </span>
                 <span className='company_name'>JustParked at</span>
                 <span className='fairname'> Q Park Mayfair Car Park</span>
                 </div>
                 <span>"Easy to follow instructions. Plenty of parking spaces and very secure Would highly recommend."</span>
                </div>
            </swiper-slide>
            <swiper-slide>
            <div className="slider_review">
                 <div className="location_text">
                 <span className='name'><b>Caroline S </b>  </span>
                 <span className='company_name'>JustParked at</span>
                 <span className='fairname'> Q Park Mayfair Car Park</span>
                 </div>
                 <span>"Easy to follow instructions. Plenty of parking spaces and very secure Would highly recommend."</span>
                </div>
            </swiper-slide>
            <swiper-slide>
            <div className="slider_review">
                 <div className="location_text">
                 <span className='name'><b>Caroline S </b>  </span>
                 <span className='company_name'>JustParked at</span>
                 <span className='fairname'> Q Park Mayfair Car Park</span>
                 </div>
                 <span>"Easy to follow instructions. Plenty of parking spaces and very secure Would highly recommend."</span>
                </div>
            </swiper-slide>
            <swiper-slide>
            <div className="slider_review">
                 <div className="location_text">
                 <span className='name'><b>Caroline S </b>  </span>
                 <span className='company_name'>JustParked at</span>
                 <span className='fairname'> Q Park Mayfair Car Park</span>
                 </div>
                 <span>"Easy to follow instructions. Plenty of parking spaces and very secure Would highly recommend."</span>
                </div>
            </swiper-slide>
            <swiper-slide>
            <div className="slider_review">
                 <div className="location_text">
                 <span className='name'><b>Caroline S </b>  </span>
                 <span className='company_name'>JustParked at</span>
                 <span className='fairname'> Q Park Mayfair Car Park</span>
                 </div>
                 <span>"Easy to follow instructions. Plenty of parking spaces and very secure Would highly recommend."</span>
                </div>
            </swiper-slide>
        </swiper-container>
    </main>
    
      </>
    )
  }
