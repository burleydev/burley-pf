import React from 'react';
import '../index.css';
import Toggle from '../components/toggle.jsx';
import LandingPage1b from '../assets/lpb1.png'
import Profile from '../assets/profile.png'
import Example from './example.jsx'

const Projects = () => (
  <div id='projects' className='flex flex-col items-center justify-center h-auto xs:mt-[5rem] lg:mt-0'>
    <h3 className='mb-[8rem] font-bold text-white lg:text-5xl md:text-6xl xs:text-3xl lg:mt-0 xs:mt-[9rem] '>My Projects</h3>
    <div className='h-auto w-[90%] bg-white rounded-lg grid grid-cols-4 p-8 projects'>
      <div className='col-span-4'>
        <h2 className='text-2xl text-white font-bold'>
          PolicyCON Landing Page
        </h2>
        <p>
          lorem ipsum
        </p>
      </div>
      {/* <div className='col-span-4'>
        <img src={LandingPage1b} alt='Carlos Borrega' className='object-cover w-[90%]' />
      </div> */}
      <Toggle className='col-span-3'/>
      {/* <pre className="bg-gray-800 p-4 ml-4 mt-[2.7rem] rounded-lg overflow-x-auto code">
        <code className="text-white">
        // Code Snippets //<br/>
          &lt;div&gt;Hello, World!&lt;/div&gt;
        </code>
      </pre> */}
      <Example className='col-span-1'/>
    </div>
  </div>
);

export default Projects;
