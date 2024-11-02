import React from 'react';
import '../index.css';
import Profile from '../assets/profile.jpg';

const About = () => (
  <div id='about' className='h-screen xs:h-auto'>
    <div className='grid h-full md:px-40 sm:py-20 lg:grid-cols-5 xs:grid-cols-1 xs:px-0'>
      <div className='profile col-span-2 flex'>
        <img src={Profile} alt='Carlos Borrega' className='object-cover' />
      </div>
      <div className='description bg-white p-8 col-span-3 flex items-center xs:px-2 sm:px-8'>
        <div className='w-full'>
          {[
            'Hi, I’m Carlos, a UX/UI Designer and Frontend Engineer with a strong foundation in web development. I hold a bootcamp certificate in Frontend Web Development and I have refined my skills at PolicyCON, a dynamic startup where I’ve contributed to various projects as part of the frontend team.',
            'My expertise lies in React, though I’m always excited to learn new technologies, including Python, which I’ve been diving into recently. I pride myself on being efficient, clear in communication, and detail-oriented in planning. I’m constantly seeking opportunities to grow, and I thrive in the tech world as I work towards becoming a better programmer every day.'
          ].map((text, idx) => (
            <p key={idx} className='text-black text-justify my-6 mx-5 xs:text-lg lg:my-10'>{text}</p>
          ))}
          <div className='flex justify-center mt-6 lg:justify-end lg:place-items-start lg:mr-5'>
            <button className='download px-6 py-3 my-2 rounded-full text-white font-semibold'>
              <a href='./assets/docs/carlos-borrega_frontend-developer_resume.pdf' download='carlos-borrega_frontend-developer_resume' className='text-xl'>
                Download my CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
