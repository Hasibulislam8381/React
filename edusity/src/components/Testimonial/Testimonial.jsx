import React from "react";
import Title from "../Title/Title";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import "./Testimonial.css";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const testimonials = [
  {
    image: user_1,
    name: "John Doe",
    address: "New York, USA",
    description: "This course helped me a lot. The instructor is amazing!",
  },
  {
    image: user_2,
    name: "Jane Smith",
    address: "London, UK",
    description: "Great content and easy to follow. Highly recommend!",
  },
  {
    image: user_3,
    name: "Michael Brown",
    address: "Sydney, Australia",
    description: "I learned so much in just a few weeks. 5 stars!",
  },
  {
    image: user_4,
    name: "Emily Johnson",
    address: "Toronto, Canada",
    description: "Very informative and engaging lessons.",
  },
];

const Testimonial = () => {
  return (
    <div id="testimonial" className="container mx-auto px-4 pt-14 pb-14">
      <Title subtitle="Testimonial" title="What Student Says" />

      <div className="relative">
        <Swiper
          className="custom-swiper-nav"
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((user, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{user.name}</h3>
                    <p className="text-sm text-gray-500">{user.address}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{user.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
