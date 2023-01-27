import React from 'react';

const Service = ({service}) => {
  const {name, desc,img} = service;
  return (
    <div className='shadow-shadow p-10 rounded-lg bg-lime-100'>
      <img className='mb-5' src={img} alt="" />
      <h3 className='text-3xl font-semibold'>{name}</h3>
      <p className='my-5'>{desc}</p>
      <button className='btn bg-yellow-500 py-3 px-5 text-xl font-semibold rounded hover:bg-yellow-600 duration-500'>Get Started</button>
    </div>
  );
};

export default Service;