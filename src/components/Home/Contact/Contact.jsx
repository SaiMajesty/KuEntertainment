import React from "react";
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {useState} from "react";

const Contact = () => {
  const form = useRef();
  const [fullName,setFullName]=useState("");
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setFullName("");
    setEmail("");
    setMessage("");

    emailjs.sendForm('service_halp7ip', 'template_w1wrk2a', form.current, '82Qz-e8YFtbTg-OAO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div id="contact" className="overflow-hidden">
      <section className=" text-secondary py-20">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div data-aos="fade-right" className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4">
              Fill in the form to start a conversation
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Pune/Pimpri-Chinchwad Area</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>9028737508</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>business.kuentertainment@gmail.com</span>
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className="shadow-shadow p-10 rounded-lg bg-white">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
              <label className="block">
                <span className="mb-3">Full name</span>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Enter Your Name"
                  onChange={event=>setFullName(event.target.value)}
                  value={fullName}
                  className=" text-theme-text block w-full rounded-md shadow-sm bg-white input-md mt-2 p-4 border"
                />
              </label>
              <label className="block">
                <span className="mb-1">Email address</span>
                <input
                  type="email"
                  name="email_id"
                  onChange={event=>setEmail(event.target.value)}
                  value={email}
                  placeholder="Enter E-mail address"
                  className="text-theme-text block w-full rounded-md shadow-sm bg-white input-md mt-2 p-4 border"
                />
              </label>
              <label className="block">
                <span className="mb-1">Message</span>
                <textarea
                  rows="3"
                  name="message"
                  onChange={event=>setMessage(event.target.value)}
                  value={message}
                  placeholder="   Covey your message"
                  className="text-theme-text block w-full rounded-md bg-white input-md mt-2 border"
                ></textarea>
              </label>
              <button
                type="submit" value="Send" 
                className="uppercase self-center w-full px-8 py-3 text-lg rounded bg-yellow-500 text-white  hover:bg-secondary duration-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
