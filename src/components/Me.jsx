import React from 'react';
import Laptop from '../assets/aboutme.jpg';

const Me = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>About Me</h1>
          <p>
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Me;
