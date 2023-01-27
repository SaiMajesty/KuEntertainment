import React from 'react';
import webDevelopment from '../../../assets/services/web-development.png';
import digital from '../../../assets/services/digital.jpg';
import influence from '../../../assets/services/i.png';
import social from '../../../assets/services/social.jpg';
import pub from '../../../assets/services/public.jpg';
import graphic from '../../../assets/services/graphic-design1.jpg'

import Service from './Service';

const Services = () => {
  const services = [
    {
      id: 1,
      name: 'Web development',
      desc: 'We provide comprehensive website design services with all the latest trends and technologies. We provide a variety of resources that can support your business whether you are planning to design a website for your company,then we are the right choice.',
      img: webDevelopment

    },
    {
      id: 2,
      name: 'Public Relations (PR)',
      desc: 'We are responsible for creating and managing the image and reputation of the company in the public eye. This can involve a wide range of activities which includes Media relations, Event planning, Social media campaigns, Research and analysis for improvement of Company.',
      img: pub
    },
    {
      id: 3,
      name: 'Influencer Marketing',
      desc: 'Influencer marketing is a rapidly growing strategy that businesses are using to reach and engage with their target audience. By partnering with influencers, businesses can leverage the reach and credibility of these individuals to promote their products or services.',
      img: influence
    },
    {
      id: 4,
      name: 'Graphic Design',
      desc: 'We are  company that specializes in creating visually stunning designs that effectively communicate your brands message. Our team of experienced designers is dedicated to understanding your business and creating designs that will help you stand out in your industry.',
      img: graphic
    },
    {
      id: 5,
      name: 'Social Media',
      desc: 'We are a social media marketing agency that helps businesses increase their online presence and reach their target audience through various social media platforms. Our team of experts will work closely with you to understand your business goals and create a customized social media strategy that will help you achieve them.',
      img: social
    },
    {
      id: 6,
      name: 'Digital Marketing',
      desc: 'We are a digital marketing agency that helps businesses increase their online visibility and reach their target audience through a variety of digital channels. Our team of experts will work closely with you to understand your business goals and create a customized digital marketing strategy that will help you achieve them.',
      img: digital
    },
  ]
  return (
    <div id="services" className=' container mx-5 md:mx-auto'>
      <div className='w-1/2 mx-auto text-center'>
        <h2 className='text-4xl  font-semibold my-5'>Our Services</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum accusamus ab similique fuga eveniet assumenda aliquid ratione neque vel nihil.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-10'>
        {
          services.map(service => <Service key={service.id} service={service} />)
        }
      </div>
    </div>
  );
};

export default Services;