import React from 'react';
import Laptop from '../assets/aboutme.jpg';

const Me = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img  className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <h1  className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>About Me</h1>
          <p>
          Currently, a third-year Computer Science student at the University of Victoria(UVic) who is expected to graduate in April of 2024. I have been programming since I was in grade 12. I took a huge interest in coding due to my father whom himself graduated from UVic. I now have over three and a half years of programming experience and experience in using different softwares and frameworks. I currently know up to eight different programming languages and well over a dozen different softwares and frameworks combined. I'm open and welcome to always learn more. No challenge or task is too big or too small.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Me;
