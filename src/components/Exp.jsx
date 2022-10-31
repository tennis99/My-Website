import React, { useEffect } from 'react';
import jea from '../assets/harjit.png';
import insurebc from '../assets/insurebc.jpeg';
import yvr from '../assets/yvrr.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Exp = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
  return (
    <div className='w-full py-[4] px-2 bg-black'>
        <h2 data-aos='fade-left' className="text-3xl py-[3rem] text-center px-4 font-bold text-white">My Work Experience</h2>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
      
      <div data-aos='flip-down' className='bg-white w-full shadow-xl flex flex-col p-1 my-4 rounded-lg hover:scale-105 duration-300'>
              <h4 className="text-left px-4">Sept 2022 - Present</h4>
              <img className='w-[8rem] h-[10rem] mx-auto bg-white' src={jea} alt="/" />
              <h2 className='text-2xl font-bold text-center py-6'>James Evans & Associates</h2>
              <p className='text-center text-1xl font-bold'>QA Analyst(Co-op)</p>
              <div className='text-center font-medium'>
                  <p className='py-2  mx-8 mt-8'>fdsfdsfdsgsdgdsgsdg</p>
              </div>
          </div>
      
      <div data-aos='flip-up' className='bg-white w-full shadow-xl flex flex-col p-1 my-4 rounded-lg hover:scale-105 duration-300'>
              <h4 className="text-left px-4">May 2022 - August 2022</h4>
              <img className='w-[8rem] h-[10rem] mx-auto bg-white' src={yvr} alt="/" />
              
              <h2 className='text-2xl font-bold text-center py-6'>Vancouver Airport Authority</h2>
              <p className='text-center text-1xl font-bold'>Data Anylyst/ Developer(Co-op)</p>
              <div className='text-center font-medium'>
                  <p className='py-2  mx-8 mt-8'>fdsfdsfdsgsdgdsgsdg</p>
              </div>
          </div>
    
          <div data-aos='flip-down' className='bg-white w-full shadow-xl flex flex-col p-1 my-4 rounded-lg hover:scale-105 duration-300'>
              <h4 className="text-left px-4">Sept 2019 - Present</h4>
              <img className='w-[8rem] h-[10rem] mx-auto bg-white' src={insurebc} alt="/" />
              
              <h2 className='text-2xl font-bold text-center py-6'>The InsureBC Group</h2>
              <p className='text-center text-1xl font-bold'>Administrative Assistant(Part-Time)</p>
              <div className='text-center font-medium'>
                  <p className='py-2  mx-8 mt-8'></p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Exp;
