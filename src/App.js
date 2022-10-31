import React from 'react';
import Me from './components/Me';
//import Exp from './components/Exp';
import Footer from './components/Footer';
import TitleP from './components/TitleP';

import MySkills from './components/MySkills';

import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";
import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";


function App() {
  return (
    <div>
      
      <TitleP />
      <div >
      <h2 data-aos='fade-up' className="text-3xl py-[3rem] text-center px-4 font-bold text-white">My Work Experience</h2>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          
          return (
            
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              
              <h3 className="vertical-timeline-element-title font-bold text-2xl">
                {element.title}
              </h3>
              <h5  className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
      
      <MySkills />
      <Me />
      {/* <Exp /> */}
      <Footer />
    </div>
  );
}

export default App;
