import React from "react";
import aboutImg from "../../../assets/about/DIGITAL-MARKETING.jpg";


const About = () => {
  return (
    <div id='about' class="my-3 py-20 px-5 mx-10">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img className="rounded-lg" src={aboutImg} alt="" />
          </div>
          <div>
            <hr className="w-1/6 border-4 border-yellow-300 my-3"/>
            <h2 className="text-4xl font-semibold">About Us</h2>
            <p className="text-lg my-5">
              KU Entertainment is a leading web design and marketing agency. We
              provide innovative and creative solutions for our clients that
              help them to reach their goals. We have a team of experienced
              professionals who are passionate about their work and strive to
              provide the best results for our clients.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
