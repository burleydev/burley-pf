import React from 'react';
import '../index.css';
import ToggleProject from './toggleProject.jsx';
import LandingPage1b from '../assets/lpb1.png';
import Profile from '../assets/profile.png';
import Example from './example.jsx';
import ToggleCode from './toggleCode.jsx';

const Projects = () => (
  <div id='projects' className='flex flex-col items-center justify-center h-auto xs:mt-[5rem] lg:mt-0'>
    <h3 className='mb-[8rem] font-bold text-white lg:text-5xl md:text-6xl xs:text-3xl lg:mt-0 xs:mt-[9rem]'>
      My Projects
    </h3>
    <div className='w-full p-8 rounded-lg grid grid-cols-4'>
      <div className='w-full mb-6 col-span-4'>
        <h2 className='text-2xl text-white font-bold text-right'>
          PolicyCON Landing Page
        </h2>
        <p className='text-white text-right'>
          lorem ipsum
        </p>
      </div>
      <div className='col-span-1'>
        <p className='text-white'>
          lorem ipsum
        </p>
      </div>
      <ToggleProject className='col-span-3' />
    </div>
    <ToggleCode className='' />
  </div>
);

export default Projects;
