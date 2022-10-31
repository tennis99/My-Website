import React, { useEffect } from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import Aos from 'aos';
import 'aos/dist/aos.css'
import './Skills.css'


const MySkills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="skill" className="bg-white px-[6rem]">
      <h2 data-aos='fade-up' className="text-3xl py-[3rem] text-center px-4 font-bold" >My Skills</h2>
      <div className="container skill_container ">
        <div className="skill_front" data-aos="fade-right">
          <h3 className="text-2xl">Languages</h3>
          <div className="skill_content ">
            <article className="skill_detail">
              <BsPatchCheckFill className="skill_detail-icon text-white"/>
              <div>
                <h4 className="text-white" >Javascript</h4>
              </div>
            </article>
            <article className="skill_detail">
              <BsPatchCheckFill className="skill_detail-icon text-white"/>
              <div>
                <h4 className="text-white">Java</h4>
              </div>
            </article>
            <article className="skill_detail">
              <BsPatchCheckFill className="skill_detail-icon text-white"/>
              <div>
                <h4 className="text-white">HTML</h4>
              </div>
            </article>
            <article className="skill_detail">
              <BsPatchCheckFill className="skill_detail-icon text-white"/>
              <div>
                <h4 className="text-white">Python</h4>
              </div>
            </article>
            <article className="skill_detail">
              <BsPatchCheckFill className="skill_detail-icon text-white"/>
              <div>
                <h4 className="text-white">C</h4>
              </div>
            </article>
            <article className="skill_detail">
              <BsPatchCheckFill className="skill_detail-icon text-white"/>
              <div>
                <h4 className="text-white">CSS</h4>
              </div>
            </article>
            <article className="skill_detail">
              <BsPatchCheckFill className="skill_detail-icon text-white"/>
              <div>
                <h4 className="text-white">Groovy</h4>
              </div>
            </article>
            <article className="skill_detail">
              <BsPatchCheckFill className="skill_detail-icon text-white"/>
              <div>
                <h4 className="text-white">R</h4>
              </div>
            </article>
          </div>
        </div>
        <div className="skill_back" data-aos="fade-left">
          <h3 className="text-2xl">Softwares & Frameworks</h3>
          <div className="skill_content">
            <article className="skill_detail">
                <BsPatchCheckFill className="skill_detail-icon text-white"/>
                <div>
                  <h4 className="text-white" >React</h4>
                </div>
              </article>
              <article className="skill_detail">
              <BsPatchCheckFill className="skill_detail-icon text-white"/>
              <div>
                <h4 className="text-white" >Katalon</h4>
              </div>
            </article>
            <article className="skill_detail">
              <BsPatchCheckFill className="skill_detail-icon text-white"/>
              <div>
                <h4 className="text-white" >Git</h4>
              </div>
            </article>
            <article className="skill_detail">
              <BsPatchCheckFill className="skill_detail-icon text-white"/>
              <div>
                <h4 className="text-white" >SourceTree</h4>
              </div>
            </article>
            <article className="skill_detail">
              <BsPatchCheckFill className="skill_detail-icon text-white"/>
              <div>
                <h4 className="text-white" >Jira</h4>
              </div>
            </article>
            <article className="skill_detail">
              <BsPatchCheckFill className="skill_detail-icon text-white"/>
              <div>
                <h4 className="text-white" >Bitbucket</h4>
              </div>
            </article>
            <article className="skill_detail">
              <BsPatchCheckFill className="skill_detail-icon text-white"/>
              <div>
                <h4 className="text-white" >Jenkins</h4>
              </div>
            </article>
            <article className="skill_detail">
              <BsPatchCheckFill className="skill_detail-icon text-white"/>
              <div>
                <h4 className="text-white" >Tailwind</h4>
              </div>
            </article>
            <article className="skill_detail">
              <BsPatchCheckFill className="skill_detail-icon text-white"/>
              <div>
                <h4 className="text-white" >Jira</h4>
              </div>
            </article>
            <article className="skill_detail">
              <BsPatchCheckFill className="skill_detail-icon text-white"/>
              <div>
                <h4 className="text-white" >VS Code</h4>
              </div>
            </article>
            <article className="skill_detail">
              <BsPatchCheckFill className="skill_detail-icon text-white"/>
              <div>
                <h4 className="text-white" >QlikSense</h4>
              </div>
            </article>
            <article className="skill_detail">
              <BsPatchCheckFill className="skill_detail-icon text-white"/>
              <div>
                <h4 className="text-white">Excel</h4>
              </div>
            </article>
            
          </div>

        </div>
        


      </div>

    </section>
    /*
    <div className=' py-[1] px-4 bg-white'>
      <h2 data-aos='fade-left' className="text-3xl py-[3rem] text-center text-3xl font-bold">My Skills</h2>
      <div className='max-w-[1230px] mx-auto grid grid-cols-2 gap-7'>
          <div className=' w-full border-black border-4 flex flex-col  rounded-lg hover:scale-105 '>
              <h2 className='text-2xl font-bold text-center py-8 bg-black text-white'>Languages</h2>
              <div className='font-medium px-2 bg-black '>
                  <div className="flex">
                    <BsPatchCheckFill className="text-white grid-template-coloums-3"/>
                    <h4 className="text-white">JavaScirpt</h4>
                  </div>
                  <div className="flex">
                    <BsPatchCheckFill className="text-white"/>
                    <h4 className="text-white">Java</h4>
                  </div>
                  <div className="flex">
                    <BsPatchCheckFill className="text-white"/>
                    <h4 className="text-white">HTML</h4>
                  </div>
                  <div className="flex">
                    <BsPatchCheckFill className="text-white"/>
                    <h4 className="text-white">Python</h4>
                  </div>
                  <div className="flex">
                    <BsPatchCheckFill className="text-white"/>
                    <h4 className="text-white">Groovy</h4>
                  </div>
                  <div className="flex">
                    <BsPatchCheckFill className="text-white"/>
                    <h4 className="text-white">CSS</h4>
                  </div>
                  <div className="flex">
                    <BsPatchCheckFill className="text-white"/>
                    <h4 className="text-white">C</h4>
                  </div>
                  <div className="flex">
                    <BsPatchCheckFill className="text-white"/>
                    <h4 className="text-white">R</h4>
                  </div>
                  <div className="flex">
                    <BsPatchCheckFill className="text-white"/>
                    <h4 className="text-white">SQL</h4>
                  </div>
              </div>
          </div>
          <div className='w-full grind-cols-2 border-black border-4 flex flex-col rounded-lg hover:scale-105'>
              <h2 className='text-2xl font-bold text-center py-8'>Software's & Frameworks</h2>
              <div className='font-medium'>
                <p className=' mx-14 border-b border-black '>React</p>
                <p className=' mx-14 border-b border-black '>Katalon</p>
                <p className=' mx-14 border-b border-black border-1'>Git</p>
                <p className=' mx-14 border-b border-black border-1'>SourceTree</p>
                <p className=' mx-14 border-b border-black border-1'>Jenkins</p>
                <p className=' mx-14 border-b border-black border-1'>Tailwind</p>
                <p className=' mx-14 border-b border-black border-1'>BitBucket</p>
                <p className=' mx-14 border-b border-black border-1'>QlikSense</p>
              </div>  
          </div>
      </div>
    </div>
    */
  );
};

export default MySkills;
