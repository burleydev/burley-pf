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
  <div id='skills' className='flex flex-col items-center justify-center h-screen mt-[5rem]'>
    <h3 className='mb-[8rem] font-bold text-white lg:text-5xl md:text-6xl xs:mt-[9rem] xs:text-3xl'>My Skills</h3>
    <div className='grid gap-x-[5rem] gap-y-[3rem] lg:grid-cols-4 xs:grid-cols-2' data-aos='fade-up'>
      {skills.map(skill => (
        <div key={skill.name} className='text-white text-center'>
          <i className={`fa-brands ${skill.icon} icon lg:text-7xl md:text-9xl xs:text-4xl`}></i>
          <h4 className='my-3 lg:text-xl md:text-3xl xs:text-md'>{skill.name}</h4>
        </div>
      ))}
      <div className='text-white text-center'>
        <img src={Typescript} alt='TypeScript' className='mt-1 mx-auto lg:h-[4rem] lg:w-[4rem] md:h-[7.5rem] md:w-[7.5rem] xs:h-[2rem] xs:w-[2rem]' />
        <h4 className='mt-4 lg:text-xl md:text-3xl xs:text-md'>Typescript</h4>
      </div>
    </div>
  </div>
);

export default Skills;
