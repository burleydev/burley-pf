import React from 'react';
import '../index.css';
import Profile from '../assets/profile.png';

const About = () => (
<div id='about' className='h-screen'>
  <div className='grid grid-cols-5 h-full px-[10rem] py-[5rem]'>
    <div className='profile col-span-2 flex'>
      <img src={Profile} alt='Carlos Borrega' className='rounded-l-xl object-cover' />
    </div>
    <div className='description bg-white p-8 rounded-r-xl col-span-3 flex items-center'>
      <div>
        <p className='text-black my-6 text-sm leading-6'>
          Hello, I'm Carlos. I am a front-end developer specializing in JavaScript, driven by a passion for constant learning. My background in retail management has honed my communication and teamwork skills, emphasizing my creative problem-solving abilities and adaptability to changes.
        </p>
        <p className='text-black my-6 text-sm leading-6'>
          I graduated from an extensive coding bootcamp by edX and earned a certificate in front-end web development. Throughout the four-month program, I successfully balanced my coursework with work commitments, showcasing both quick learning abilities and a strong commitment to continuous improvement.
        </p>
        <p className='text-black my-6 text-sm leading-6'>
          Detail-oriented and highly motivated, I derive satisfaction from coding efficient and responsive websites. I am eager to contribute my diverse skill set to dynamic development projects, demonstrating an unwavering commitment to excellence.
        </p>
        <button>
          <a href='./assets/docs/carlos-borrega_frontend-developer_resume.pdf' download='carlos-borrega_frontend-developer_resume'>
            Download my CV
          </a>
        </button>
      </div>
    </div>
  </div>
</div>


);

export default About;
