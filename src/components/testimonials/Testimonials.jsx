import React from "react";
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import AV1 from "../../assets/avatar1.jpg";
import AV2 from "../../assets/avatar2.jpg";
import AV3 from "../../assets/avatar3.jpg";
import AV4 from "../../assets/avatar4.jpg";
import "./testimonials.css";

const data = [
  {
    avatar: AV1,
    name: "Ernest Arhiver",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ducimusprovident inventore quos odit asperiores sunt sit repellat ve facere praesentium?",
  },
  {
    avatar: AV2,
    name: "Ernest Arhiver",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ducimusprovident inventore quos odit asperiores sunt sit repellat ve facere praesentium?",
  },
  {
    avatar: AV3,
    name: "Ernest Arhiver",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ducimusprovident inventore quos odit asperiores sunt sit repellat ve facere praesentium?",
  },
  {
    avatar: AV4,
    name: "Ernest Arhiver",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ducimusprovident inventore quos odit asperiores sunt sit repellat ve facere praesentium?",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5>{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
