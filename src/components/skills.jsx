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
  <div id='skills' className='flex flex-col items-center justify-center h-screen'>
    <h3 className='mb-[8rem] text-4xl font-bold text-white'>My Skills</h3>
    <div className='grid grid-cols-4 gap-x-[5rem] gap-y-[3rem]' data-aos='fade-up'>
      {skills.map(skill => (
        <div key={skill.name} className='text-white text-center'>
          <i className={`fa-brands ${skill.icon} icon text-7xl`}></i>
          <h4 className='text-lg my-2'>{skill.name}</h4>
        </div>
      ))}
      <div className='text-white text-center'>
        <img src={Typescript} alt='TypeScript' className='h-[4rem] w-[4rem] mt-1 mx-auto' />
        <h4 className='text-lg my-2'>Typescript</h4>
      </div>
    </div>
  </div>
);

export default Skills;
