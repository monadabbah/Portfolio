import React, { useRef, useState } from "react";
import "./recommendations.css";
import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Recommendations = () => {
    return (
        <section className="recommendation section" id="recommendation">
            <h2 className="section__title">Recommendations</h2>
            <span className="section__subtitle">What people say</span>

            <Swiper className="recommendation__container"
            loop={true}
            grabCursor={true}
            spaceBetween={24}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 48,
              },
            }}
            modules={[Pagination]}
            >
                {Data.map(({id, image, title, description}) => {
                    return (
                        <SwiperSlide className="recommendation__card" key={id}>
                            <img src={image} alt="" className="recommendation__img"/>
                            <h3 className="recommendation__name">{title}</h3>
                            <p className="recommendation__description">{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section> 
    )
}

export default Recommendations