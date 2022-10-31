import React from 'react';
import { AiFillLinkedin, AiFillInstagram, AiFillContainer} from 'react-icons/ai';
import Wave from 'react-wavify';
import TypeWriterEffect from 'react-typewriter-effect';


const TitleP = () => {
  return (
    <div className='text-white '>
      <div className='max-w-[800px] mt-[-96px] h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='md:text-6xl sm:text-5xl text-3xl font-bold md:py-6'>
          Hey, I'm Jovan Sihota
        </h1>
        <div className='flex justify-center items-center'>
          <TypeWriterEffect
          className="py-[2rem]"
          startDelay={100}
          cursorColor="white"
          text="A Junior Software Developer."
          typeSpeed={105}
          eraseSpeed={100}
          />
        </div >
        <div className="flex justify-center gap-3 text-4xl py-3">
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jsihota123/">
            <AiFillLinkedin className="hover:scale-150"/>
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/sihota.jovan/?hl=en">
            <AiFillInstagram className="hover:scale-150"/>
          </a>
          <a href="Wave">
           <AiFillContainer className="hover:scale-150"/>
          </a>
        </div>
      </div>
      <Wave
            fill='#f8f8ff'
            paused={false}
            options={{
              height: 17,
              amplitude: 50,
              speed: 0.15,
              points: 4
            }}
          />
    </div>
  );
};

export default TitleP;
