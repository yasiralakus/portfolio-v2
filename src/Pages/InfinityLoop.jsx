import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

export default function InfinityLoop() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 2000,
        }}
        breakpoints={{
            550: {
                slidesPerView: 2,
            },
            0: {
                slidesPerView: 1,
            },
          }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>

            <div className="testinomials-item">

                <img src="https://kane-portfolio-react.vercel.app/assets/author1-R1o5kqXP.jpg" alt="" />

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam qui pariatur obcaecati possimus, explicabo, assumenda dolores eligendi quas perferendis dolorem voluptatibus veritatis reprehenderit dolor?.</p>

                <h3>Zonaton Doe</h3>

                <h6>CEO ve Kurucu, X</h6>

            </div>

        </SwiperSlide>

        <SwiperSlide>

            <div className="testinomials-item">

                <img src="https://kane-portfolio-react.vercel.app/assets/author2-BQNT70-I.jpg" alt="" />

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam qui pariatur obcaecati possimus, explicabo, assumenda dolores eligendi quas perferendis dolorem voluptatibus veritatis reprehenderit dolor?.</p>

                <h3>Liana Marie</h3>

                <h6>Tasarım Ekibi Lideri, Meta</h6>

            </div>

        </SwiperSlide>

        <SwiperSlide>

            <div className="testinomials-item">

                <img src="https://kane-portfolio-react.vercel.app/assets/author1-R1o5kqXP.jpg" alt="" />

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam qui pariatur obcaecati possimus, explicabo, assumenda dolores eligendi quas perferendis dolorem voluptatibus veritatis reprehenderit dolor?.</p>

                <h3>Zonaton Doe</h3>

                <h6>CEO ve Kurucu, X</h6>

            </div>

        </SwiperSlide>

        <SwiperSlide>

            <div className="testinomials-item">

                <img src="https://kane-portfolio-react.vercel.app/assets/author2-BQNT70-I.jpg" alt="" />

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam qui pariatur obcaecati possimus, explicabo, assumenda dolores eligendi quas perferendis dolorem voluptatibus veritatis reprehenderit dolor?.</p>

                <h3>Liana Marie</h3>

                <h6>Tasarım Ekibi Lideri, Meta</h6>

            </div>

        </SwiperSlide>

        <SwiperSlide>

            <div className="testinomials-item">

                <img src="https://kane-portfolio-react.vercel.app/assets/author1-R1o5kqXP.jpg" alt="" />

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam qui pariatur obcaecati possimus, explicabo, assumenda dolores eligendi quas perferendis dolorem voluptatibus veritatis reprehenderit dolor?.</p>

                <h3>Zonaton Doe</h3>

                <h6>CEO ve Kurucu, X</h6>

            </div>

        </SwiperSlide>

        <SwiperSlide>

            <div className="testinomials-item">

                <img src="https://kane-portfolio-react.vercel.app/assets/author2-BQNT70-I.jpg" alt="" />

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam qui pariatur obcaecati possimus, explicabo, assumenda dolores eligendi quas perferendis dolorem voluptatibus veritatis reprehenderit dolor?.</p>

                <h3>Liana Marie</h3>

                <h6>Tasarım Ekibi Lideri, Meta</h6>

            </div>

        </SwiperSlide>

      </Swiper>
    </>
  );
}
