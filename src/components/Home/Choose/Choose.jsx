import React from 'react';
import "./Choose.css";
import Rocket from "../../../assets/logo/Rocket.jpg";
const Choose = () => {
    return (
        <div id="choose">
        <div className="  py-20">
      <div className=" container mx-auto font-semibold">
        <div className="grid grid-cols-1 md:grid-cols-4  gap-20 ">
            <div className="md-col-span-4">
                    <p className="text-secondary">Why Choose Us?</p>
                    <h3 className="text-3xl my-3">
                    Our Special Features.
                    </h3>
                    <p className="my-5 text-theme-text">
                    Ku Entertainment provides web content design and developement services as well as Content Marketing
                    </p>


                        <button className="btn bg-blue-500 text-white py-3 px-5 text-xl font-semibold mt-5 rounded hover:-translate-y-2 duration-500 mr-5">
                        Get Started
                    </button>
            </div>
            <div className="md-col-span-4">
                <div className="Card">
                <img className="w-1/3" src={Rocket} alt="" />
                <h3 className="text-3xl my-3">
                    Goals and Objectives.
                    </h3>
                    <p className="my-5 text-theme-text">
                    At KU Entertainment, our goal is to help our clients achieve success in the entertainment industry through effective digital marketing strategies. Our main objectives are

Increase online visibility, We aim to help our clients establish a strong online presence and reach a wider audience through social media, SEO, and other digital channels.
              </p>
              </div>
                </div>

      
                <div className="md-col-span-2">
                <div className="Card">
                <img className="w-1/3" src={Rocket} alt="" />
                <h3 className="text-3xl my-3">
                    Efficiency.
                    </h3>
                    <p className="my-5 text-theme-text">
                    At Ku Entertainment, we strive for the utmost effiency in our Dead Line Submission staff. Our team works hard to ensure that all forms and deadlines are met on time and accurately so that our clients can have peace of mind. We are committed to providing quality services to the best of our ability.
              </p>      
              </div>          
            </div>
            <div className="md-col-span-2">
                <div className="Card">
                <img className="w-1/3" src={Rocket} alt="" />
                <h3 className="text-3xl my-3">
                    Stratergy.
                    </h3>
                    <p className="my-5 text-theme-text">
                    At KU Entertainment, we understand the importance of a strong and comprehensive digital marketing strategy. Our team of experts will work closely with you to create a customized plan that will help you reach your target audience and achieve your business goals.
              </p>      
              </div>          
           
           
</div>

            </div>
            </div>    
        </div>
        </div>
    );
};

export default Choose;