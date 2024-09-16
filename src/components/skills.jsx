import React from 'react';
import '../index.css'
import Typescript from '../assets/typescript.png'

const Skills = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h3 className='mb-12 text-3xl font-bold'>
        MY SKILLS
      </h3>
      <div data-aos='fade-up' className='grid grid-cols-4 place-items-center gap-x-[5rem] gap-y-[2rem]'>
        <div className='text-white text-center'>
          <i className='fa-brands fa-react icon text-8xl'></i>
          <h4 className='text-lg my-2'>ReactJS</h4>
        </div>
        <div className='text-white text-center'>
          <i className='fa-brands fa-node icon text-8xl'></i>
          <h4 className='text-lg my-2'>Node.js</h4>
        </div>
        <div className='text-white text-center'>
          <i className='fa-brands fa-git icon text-8xl'></i>
          <h4 className='text-lg my-2'>Git</h4>
        </div>
        <div className='text-white text-center'>
          <i className='fa-brands fa-figma icon text-8xl'></i>
          <h4 className='text-lg my-2'>Figma</h4>
        </div>
        <div className='text-white text-center'>
          <i className='fa-brands fa-html5 icon text-8xl'></i>
          <h4 className='text-lg my-2'>HTML</h4>
        </div>
        <div className='text-white text-center'>
          <i className='fa-brands fa-css3-alt icon text-8xl'></i>
          <h4 className='text-lg my-2'>CSS</h4>
        </div>
        <div className='text-white text-center'>
          <i className='fa-brands fa-js icon text-8xl'></i>
          <h4 className='text-lg my-2'>JavaScript</h4>
        </div>
        <div className='text-white'>
          <img src={Typescript} alt='TypeScript' className='h-[5.5rem] w-[5.5rem] my-2 mx-auto' />
          <h4 className='text-lg my-2'>Typescript</h4>
        </div>
      </div>
    </div>
  );
};

export default Skills;