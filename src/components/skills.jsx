import React, { useState } from 'react';
import '../index.css';
import Typescript from '../assets/typescript.png';

const skills = [
  { icon: 'fa-react', name: 'ReactJS' },
  { icon: 'fa-node', name: 'Node.js' },
  { icon: 'fa-git', name: 'Git' },
  { icon: 'fa-figma', name: 'Figma' },
  { icon: 'fa-html5', name: 'HTML' },
  { icon: 'fa-css3-alt', name: 'CSS' },
  { icon: 'fa-js', name: 'JavaScript' },
];

const getTransformStyle = (hoveredIndex, currentIndex) => {
  // Check if the screen width is less than 1042px
  if (window.innerWidth < 1042) return 'scale(1)';

  if (hoveredIndex === null || hoveredIndex === currentIndex) return 'scale(1)';

  const rowLength = 4; // Assuming 4 columns in the grid

  if (currentIndex === hoveredIndex - rowLength) return 'translateY(-10px)'; // Above
  if (currentIndex === hoveredIndex + rowLength) return 'translateY(10px)';  // Below
  if (currentIndex === hoveredIndex - 1 && hoveredIndex % rowLength !== 0) return 'translateX(-10px)'; // Left
  if (currentIndex === hoveredIndex + 1 && (hoveredIndex + 1) % rowLength !== 0) return 'translateX(10px)'; // Right

  return 'translateX(0px) translateY(0px)'; // Slight diagonal for distant icons
};


const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div id='skills' className='flex flex-col items-center justify-center h-screen xs:mt-[5rem] lg:mt-0 relative'>
    <div className='bg-transparent w-full h-[900px] absolute top-0 z-10 lg:hidden'></div>
      <h3 className='mb-[8rem] font-bold text-myBlack lg:text-5xl md:text-4xl xs:text-3xl lg:mt-0 xs:mt-[9rem] '>My Skills</h3>
      <div className='grid gap-x-[5rem] gap-y-[3rem] lg:grid-cols-4 xs:grid-cols-2' data-aos='fade-up'>
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className='text-myBlack text-center'
            onMouseEnter={() => setHoveredSkill(index)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <i
              className={`fa-brands ${skill.icon} icon lg:text-7xl md:text-6xl xs:text-5xl`}
              style={{
                transform: hoveredSkill === index ? 'scale(1.2)' : getTransformStyle(hoveredSkill, index),
                // opacity: hoveredSkill !== null && hoveredSkill !== index ? 0.7 : 1,
                transition: 'transform 0.3s ease, opacity 0.3s ease',
              }}
            ></i>
            <h4
              className='mt-7 lg:text-xl md:text-lg xs:text-md text-myGrey font-semibold'
              style={{
                transform: getTransformStyle(hoveredSkill, index),
                // opacity: hoveredSkill !== null && hoveredSkill !== index ? 0.7 : 1,
                transition: 'transform 0.3s ease, opacity 0.3s ease',
              }}
            >
              {skill.name}
            </h4>
          </div>
        ))}
        <div className='text-my text-center'>
          <img
            src={Typescript}
            alt='TypeScript'
            className='typescript-icon mt-1 mx-auto lg:h-[4rem] lg:w-[4rem] md:h-[3.3rem] md:w-[3.3rem] xs:h-[2.5rem] xs:w-[2.5rem]'
            style={{
              transform: hoveredSkill === skills.length ? 'scale(1.2)' : getTransformStyle(hoveredSkill, skills.length),
              // opacity: hoveredSkill !== null && hoveredSkill !== skills.length ? 0.7 : 1,
              transition: 'transform 0.3s ease, opacity 0.3s ease',
            }}
            onMouseEnter={() => setHoveredSkill(skills.length)}
            onMouseLeave={() => setHoveredSkill(null)}
          />
          <h4
            className='mt-8 lg:text-xl md:text-lg xs:text-md text-myGrey font-semibold'
            style={{
              transform: getTransformStyle(hoveredSkill, skills.length),
              // opacity: hoveredSkill !== null && hoveredSkill !== skills.length ? 0.7 : 1,
              transition: 'transform 0.3s ease, opacity 0.3s ease',
            }}
          >
            TypeScript
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Skills;

