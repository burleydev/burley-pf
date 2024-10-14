import React from 'react';
import '../index.css';
import ToggleProject from './toggleProject.jsx';
import ToggleCode from './toggleCode.jsx';
import VideoPlayer from './videoPlayer.jsx';

const Projects = () => (
  <div id='projects' className='flex flex-col items-center justify-center h-auto xs:mt-[5rem] lg:mt-0'>
    <VideoPlayer src='./src/assets/1080.mp4' />
    <h3 className='mb-[8rem] font-bold text-white lg:text-5xl md:text-6xl xs:text-3xl lg:mt-0 xs:mt-[9rem]'>
      My Projects
    </h3>
    <div className='grid grid-cols-2 mx-10'>
      <div className='mt-[9.8rem] pr-8'>
        <h3 className='pb-8 text-white font-bold text-2xl'>
          Project Overview
        </h3>
        <p className='text-white leading-8 mb-[5rem]'>
          The PolicyCON landing page was developed as the main entry point for a platform that connects policy analysts with subscribers, helping them make informed decisions. The primary goal was to present information in a structured, user-friendly way while showcasing key sections like 'Popular Analyst Areas' and 'Featured Analysts.' Ensuring clarity and engagement was essential to enhance user interaction.
        </p>
        <h3 className='pb-8 text-white font-bold text-2xl'>
          Technologies Used
        </h3>
        <p className='text-white leading-8 mb-[5rem]'>
          Languages: React, TypeScript
          Styling: Tailwind CSS
          Design & Prototyping: Figma
          Version Control: Git, GitHub
          Design & User Experience (UX)
          The design process started with Figma, where we mapped out the layout to ensure a clean and intuitive user experience. The main objective was to highlight important areas, such as Popular Analyst Areas and Featured Analysts, without overwhelming the user. Additionally, the page was built with responsive design in mind, making it adaptable to smaller screens like phones and tablets, ensuring the platform is accessible across all devices.
        </p>
        <h3 className='pb-8 text-white font-bold text-2xl'>
          Development Process
        </h3>
        <p className='text-white leading-8 mb-[5rem]'>
          Development was highly collaborative. I worked closely with the frontend team, providing design feedback and iterating on the visuals to improve clarity and usability. We followed Agile methodology throughout the process to ensure continuous improvements and quick issue resolution. Git and GitHub were used for version control, with frequent code pushes and peer reviews to maintain high-quality code and minimize bugs.
        </p>
        <h3 className='pb-8 text-white font-bold text-2xl'>
          Mobile Reponsiveness
        </h3>
        <p className='text-white leading-8 mb-[5rem]'>
          We focused on making the landing page fully responsive. This involved adapting the layout to mobile and tablet screen sizes, ensuring that the user experience remained seamless and intuitive, regardless of the device.
        </p>
        <h3 className='pb-8 text-white font-bold text-2xl'>
          Outcomes & Learnings
        </h3>
        <p className='text-white leading-8 mb-[5rem]'>
          The project successfully met its goals of providing a structured, visually appealing landing page. The team was able to collaborate effectively using Agile practices, and the end product showcased a polished, responsive design. I gained valuable experience working with TypeScript and React, as well as improved my skills in design feedback and collaboration.
        </p>
      </div>
      <div className='mb-6'>
        <h2 className='text-3xl text-white font-bold text-right pb-4'>
          PolicyCON Landing Page
        </h2>
        <h3 className='text-white text-right font-bold text-lg'>
          React / TypeScript / Tailwind
        </h3>
        <ToggleProject />
      </div>

    </div>

    <ToggleCode className='' />
  </div>
);

export default Projects;
