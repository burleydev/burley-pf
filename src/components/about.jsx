import React from 'react';
import '../index.css';
import Profile from '../assets/profile.png';
import Resume from '../assets/docs/charles-burley_frontend-developer_resume.pdf'

const About = () => (
  <div id='about' className='h-screen xs:h-auto'>
    <div className='grid h-full md:px-40 sm:py-20 lg:grid-cols-5 xs:grid-cols-1 xs:px-0'>
      <div className='profile col-span-2 flex'>
        <img src={Profile} alt='Charles Burley' className='object-cover shadow-lg' />
      </div>
      <div className='description bg-white p-8 col-span-3 flex items-center xs:px-2 sm:px-8 shadow-lg'>
        <div className='w-full'>
          {[
            'Hi, I’m Charlie, a UX/UI Designer and Frontend Developer with a strong foundation in web technologies. I hold a bootcamp certificate in Frontend Development and I have refined my skills at PolicyCON, a dynamic startup where I’ve contributed to various projects as part of the frontend team.',
            'My expertise lies in React, though I’m always excited to learn new programming languages, including Python, which I’ve been diving into recently. I pride myself on being efficient, clear in communication, and detail-oriented in planning. I’m constantly seeking opportunities to grow, and I thrive in the tech world as I work towards becoming a better programmer every day.'
          ].map((text, idx) => (
            <p key={idx} className='text-myBlack text-justify my-6 mx-5 xs:text-sm xs:leading-7 lg:text-lg lg:my-10'>{text}</p>
          ))}
          <div className='flex justify-center mt-6 lg:justify-end lg:place-items-start lg:mr-5'>
            <button className='mt-4 p-4 text-white bg-myBlack rounded-lg font-bold hover:bg-myGrey'>
              <a href={Resume} download='carlos-borrega_frontend-developer_resume' className='text-xl xs:text-[17px]'>
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
