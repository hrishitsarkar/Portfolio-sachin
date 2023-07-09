import React from "react";
import "./testimonials.css";
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    avatar: "null",
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, nesciunt. Incidunt vel provident nesciunt ad accusamus rem debitis perferendis, nihil quidem accusantium beatae expedita aliquid rerum eos dolorum delectus cumque?",
  },
];
function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ id, avatar, name, review }) => {
          return (
            <SwiperSlide key={id} className="testimonials">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
