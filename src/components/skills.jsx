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
  <div className='flex flex-col items-center justify-center h-screen'>
    <h3 className='mb-12 text-3xl font-bold'>MY SKILLS</h3>
    <div className='grid grid-cols-4 place-items-center gap-x-[5rem] gap-y-[2rem] my-20' data-aos='fade-up'>
      {skills.map(skill => (
        <div key={skill.name} className='text-white text-center'>
          <i className={`fa-brands ${skill.icon} icon text-8xl`}></i>
          <h4 className='text-lg my-2'>{skill.name}</h4>
        </div>
      ))}
      <div className='text-white text-center'>
        <img src={Typescript} alt='TypeScript' className='h-[5.5rem] w-[5.5rem] my-2 mx-auto' />
        <h4 className='text-lg my-2'>Typescript</h4>
      </div>
    </div>
  </div>
);

export default Skills;
