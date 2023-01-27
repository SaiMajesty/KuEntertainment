import React from "react";
import google from "../../../assets/companies/google.png";
import converce from "../../../assets/companies/converce.png";
import freeFire from "../../../assets/companies/freeFire.png";
import panda from "../../../assets/companies/panda.png";
import square from "../../../assets/companies/square.png";
import ulta from "../../../assets/companies/ulta.png";
import Company from "./Company";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

import { Autoplay, Navigation } from "swiper";


const Companies = () => {
  const companies = [
    {
      id: 1,
      img: google,
    },
    {
      id: 2,
      img: converce,
    },
    {
      id: 3,
      img: freeFire,
    },
    {
      id: 4,
      img: panda,
    },
    {
      id: 5,
      img: square,
    },
    {
      id: 6,
      img: ulta,
    },
  ];
  return (
    <div className="my-10">
      <h3 className="text-2xl font-bold my-10">Trusted by</h3>
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        // navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {companies.map((company) => (
          <SwiperSlide key={company.id}>
            <Company company={company} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Companies;
