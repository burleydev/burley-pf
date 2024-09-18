import React from 'react';
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

const Skills = () => (
  <div id='skills' className='flex flex-col items-center justify-center h-screen xs:mt-[5rem] lg:mt-0'>
    <h3 className='mb-[8rem] font-bold text-white lg:text-5xl md:text-6xl xs:text-3xl lg:mt-0 xs:mt-[9rem] '>My Skills</h3>
    <div className='grid gap-x-[5rem] gap-y-[3rem] lg:grid-cols-4 xs:grid-cols-2' data-aos='fade-up'>
      {skills.map(skill => (
        <div key={skill.name} className='text-white text-center'>
          <i className={`fa-brands ${skill.icon} icon lg:text-7xl md:text-6xl xs:text-5xl`}></i>
          <h4 className='my-3 lg:text-xl md:text-lg xs:text-md'>{skill.name}</h4>
        </div>
      ))}
      <div className='text-white text-center'>
        <img src={Typescript} alt='TypeScript' className='mt-1 mx-auto lg:h-[4rem] lg:w-[4rem] md:h-[3.3rem] md:w-[3.3rem] xs:h-[2.5rem] xs:w-[2.5rem]' />
        <h4 className='mt-4 lg:text-xl md:text-lg xs:text-md'>TypeScript</h4>
      </div>
    </div>
  </div>
);

export default Skills;
