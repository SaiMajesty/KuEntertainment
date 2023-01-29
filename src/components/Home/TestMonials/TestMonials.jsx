import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

import { Autoplay, Navigation } from "swiper";
import Slider from "./Slider";

const TestMonials = () => {
  const testMonials =
  [
    {
      "_id": "635a0c0b64a6d231228952ae",
      "name": "Awlad Hossain",
      "img": "https://i.ibb.co/ZLnhzJ0/1.png",
      "review": "I had the pleasure of working with KU Entertainment on a digital marketing campaign for my company. From the start, their team was professional, knowledgeable, and easy to work with. They took the time to understand my business goals and created a customized strategy that helped me increase my online visibility and reach a wider audience."
    },
    {
      "_id": "635a0c0b64a6d231228962ae",
      "name": "Greek Charlotte",
      "img": "https://i.ibb.co/NxQg6kT/2.png",
      "review": "KU Entertainment is a web design company that specializes in creating visually stunning and user-friendly websites for their clients. Their team of experienced designers and developers work closely with clients to understand their needs and goals, and translate that into a website that effectively represents their brand and message."
    },
    {
      "_id": "635a0c0b64a6d231228972ae",
      "name": "Jade Mathias",
      "img": "https://i.ibb.co/ZLnhzJ0/1.png",
      "review": "KU Entertainment is a full-service marketing organization that helps businesses reach their target audience and achieve their marketing goals. They offer a wide range of services, including branding, advertising, market research, public relations, and event planning."
    },
    {
      "_id": "635a0c0b64a6d231228982ae",
      "name": "Tom Nathan",
      "img": "https://i.ibb.co/NxQg6kT/2.png",
      "review": "KU Entertainment is a digital marketing agency that provides a wide range of services to help businesses achieve their marketing goals. Their services include search engine optimization (SEO), social media marketing, email marketing, and pay-per-click (PPC) advertising."
    }
  
  ]

  return (
    <div id="testmonials" className='container mx-auto my-20'>
      
    <div className="text-center">
      <h2 className="text-4xl uppercase font-semibold text-secondary">
      What Customer Says
      </h2>
    </div>
    <div className='mt-10'>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {
          testMonials.map(reviewSlide =>
            <SwiperSlide key={reviewSlide._id}>
              <Slider reviewSlide={reviewSlide} />
            </SwiperSlide>
          )
        }
      </Swiper>
    </div>
  </div>
  );
};

export default TestMonials;

