import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./carousel.css";

import html from './img/html.png';
import css from './img/css.png';
import js from './img/js.png';
import node from './img/node.png';
import mongodb from './img/mongodb.png';
import mysql from './img/mysql.png';
import python from './img/python.png';

function Carousel() {
 
  const images = [
    html,
    css,
    js,
    node,
    mongodb,
    mysql,
    python
  ];

  return (
    <div className="container">
      <div className="carousel">
        <div className="swiperContainer">
          <Swiper
            modules={[Pagination, Autoplay]}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false
            }}
            pagination={{
              el: ".pagination",
              clickable: true,
            }}
            slidesPerView={5}
            breakpoints={{
              "@0.00": {
                slidesPerView: 3,
                spaceBetween: 1,
              },
              "@0.50": {
                slidesPerView: 3,
                spaceBetween: 1,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 1,
              },
              "@1.25": {
                slidesPerView: 3,
                spaceBetween: 1,
              },
              "@1.50": {
                slidesPerView: 3,
                spaceBetween: 1,
              },
              "@1.75": {
                slidesPerView: 3,
                spaceBetween: 1,
              },
            }}
          >
            {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img className='technologys'src={image} alt={`slide-${index}`} />
          </SwiperSlide>
        ))}
          </Swiper>
        </div>
        <div className="pagination" />
      </div>
    </div>
  );
};

export default Carousel;
