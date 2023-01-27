import React from 'react';
// import './company.css';

const Company = ({company}) => {
  const {img} = company;
  return (
    <div>
      <img className='w-[50px] h-[50px]' src={img} alt="" />
    </div>
  );
};

export default Company;