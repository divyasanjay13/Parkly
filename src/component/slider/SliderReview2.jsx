import React from "react";
import "./SliderReview2.css";
import TrustedStars from "../Trustedstars/TrustedStars";

export default function SliderReview2() {
  return (
    <>
      <main>
        <swiper-container pagination="true"
          breakpoints={JSON.stringify({
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          

            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          })}
        >
          <swiper-slide>
            <div className="sliderreviewsblock">
              <div className="trustedstarsinslider">
                <TrustedStars />
              </div>
              <div className="reviewheight">
                <p className="mb-3">
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
                  aperiam magnam nam dolorem eaque accusamus doloribus veritatis
                  inventore. Voluptatum beatae mollitia at tempora asperiores
                  iure maiores facilis provident inventore! Eligendi fugit
                  voluptatem mollitia modi."
                </p>
              </div>
              <p>
                <strong>Somil Jain</strong>
              </p>
            </div>
          </swiper-slide>
          <swiper-slide> <div className="sliderreviewsblock">
              <div className="trustedstarsinslider">
                <TrustedStars />
              </div>
              <div className="reviewheight">
                <p className="mb-3">
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
                  aperiam magnam nam dolorem eaque accusamus doloribus veritatis
                  inventore. Voluptatum beatae mollitia at tempora asperiores
                  iure maiores facilis provident inventore! Eligendi fugit
                  voluptatem mollitia modi."
                </p>
              </div>
              <p>
                <strong>Mrs.Donna Parish</strong>
              </p>
            </div></swiper-slide>
          <swiper-slide> <div className="sliderreviewsblock">
              <div className="trustedstarsinslider">
                <TrustedStars />
              </div>
              <div className="reviewheight">
                <p className="mb-3">
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
                  aperiam magnam nam dolorem eaque accusamus doloribus veritatis
                  inventore. Voluptatum beatae mollitia at tempora asperiores
                  iure maiores facilis provident inventore! Eligendi fugit
                  voluptatem mollitia modi."
                </p>
              </div>
              <p>
                <strong>Greg R</strong>
              </p>
            </div></swiper-slide>
          <swiper-slide> <div className="sliderreviewsblock">
              <div className="trustedstarsinslider">
                <TrustedStars />
              </div>
              <div className="reviewheight">
                <p className="mb-3">
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
                  aperiam magnam nam dolorem eaque accusamus doloribus veritatis
                  inventore. Voluptatum beatae mollitia at tempora asperiores
                  iure maiores facilis provident inventore! Eligendi fugit
                  voluptatem mollitia modi."
                </p>
              </div>
              <p>
                <strong>Lisa page</strong>
              </p>
            </div></swiper-slide>
        </swiper-container>
      </main>
    </>
  );
}
