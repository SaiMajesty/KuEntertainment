import React from "react";
import box1 from "../../../assets/marketing/box-1.png";
import box2 from "../../../assets/marketing/box-2.png";
import box3 from "../../../assets/marketing/box-3.png";

import box4 from "../../../assets/marketing/box-4.png";

const MarketingSolutions = () => {
  return (
    <div className=" py-20">
      <div className=" container mx-auto font-semibold">
        <div>
          <p className="text-secondary">Our Premium Marketing solutions</p>
          <h3 className="text-3xl my-3">
            Supercharge your Business with Social Media
          </h3>
          <p className="my-5 text-theme-text">
          Ku Entertainment provides web content design and developement services as well as Content Marketing
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 my-20 gap-20">
          <div className="col-span-4 sm:col-span-4 md:col-span-8">
            <div className="grid grid-cols-1  md:grid-cols-2  gap-10">
              <div className="bg-white p-10 rounded-lg">
                <h4 className="text-2xl my-5 text-secondary font-semibold">
                  Email Marketing
                </h4>
                <p className="my-5 text-theme-text">
                At KU Entertainment, we understand the importance of email marketing in today's digital landscape. Our team of experts will work closely with you to create a customized email marketing strategy that will help you connect with your target audience and achieve your business goals.

Our services include,

Email list building, We will help you develop a targeted email list of potential customers and fans.
                </p>
               
                  <button className="bg-secondary py-3 px-5 rounded text-xl text-white">
                    Learn More
                  </button>
                  <img className="w-52" src={box1} alt="" />
            
              </div>
              <div className="bg-secondary p-10 rounded-lg">
                <h4 className="text-2xl my-5 text-primary font-semibold">
                  Stratergy Development
                </h4>
                <p className="my-5 text-white">
                Ku entertainment has had great success in stratergy Developement. Through the implementation of Startergy, a company-wide strategery, they have been able to gain competitive advantage over their competitors. The company regularly solicits suggestions from employees on ways to further develop and refine their strategery for even greater success.
                </p>
                
                  <button className="bg-white  rounded text-xl py-3 px-5">
                    Learn More
                  </button>
                 
                  <img className="w-52" src={box2} alt="" />
              </div>
            </div>
            <div className="col-span-4 bg-secondary p-10 rounded-lg mt-10">
              <h4 className="text-2xl my-5 text-primary font-semibold">
                Content Stratergy
              </h4>
              <p className="my-5 text-white">
              Ku entertainment offers a wide range of web content design and development services. They understand the importance of having a solid content stratergy and are committed to creating engaging, relevant and impactful content for their clients. They keep up with the latest trends in the industry to ensure that their content is as effective as possible.
              </p>
              
                <button className="bg-white text-secondary rounded text-xl py-3 px-5">
                  Learn More
                </button>
                <img className="w-36" src={box3} alt="" />
             
            </div>
          </div>
          <div className="col-span-4 bg-white p-10 rounded-lg ">
            <h4 className="text-2xl my-5 text-secondary font-semibold">
              Content Marketing
            </h4>
            <p className="my-5 text-theme-text">
            KU Entertainment offers a comprehensive suite of services for web content design and development, including content marketing. Their experienced team will help you create engaging and effective content strategies tailored to your business goals, from developing original content assets to executing campaigns across multiple channels. 
            </p>
            <p className="my-5 text-theme-text">
            With their expert guidance, you can be sure your content marketing efforts are always successful.
            </p>
            <button className="bg-secondary text-white rounded text-xl py-3 px-5">
              Learn More
            </button>
            <img src={box4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingSolutions;
