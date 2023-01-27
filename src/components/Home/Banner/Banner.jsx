import React from "react";
import bannerImg from "../../../assets/banner/bannerImg.jpg";
import Companies from "../Companies/Companies";

const Banner = () => {
  return (
    <div className="container mx-5 md:mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-20">
        <div className="">
          <p className="text-secondary font-semibold mb-3">
            Your Go to Marketing Agency
          </p>
          <h2 className="text-4xl font-semibold capitalize leading-snug">
            Super Fast marketing solution with{" "}
            <span className="italic font-bold">KU Entertainment</span>
          </h2>
          <div>
            <button className="btn bg-yellow-500 text-white py-3 px-5 text-xl font-semibold mt-5 rounded hover:-translate-y-2 duration-500 mr-5">
              Get Started
            </button>
            <button className="btn bg-secondary text-white py-3 px-5 text-xl font-semibold mt-5 rounded duration-500 hover:-translate-y-2 ">
              Learn More
            </button>
          </div>
          <div>
            <Companies />
          </div>
        </div>
        <div className="">
          <img src={bannerImg} className="rounded w-full h-[400px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
