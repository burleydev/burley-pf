import React from 'react';
import '../index.css';
import Profile from '../assets/profile.png';

const About = () => (
  <div id='about' className='h-screen xs:h-auto'>
    <div className='grid h-full md:px-40 sm:py-20 lg:grid-cols-5 xs:grid-cols-1 xs:px-16'>
      <div className='profile col-span-2 flex'>
        <img src={Profile} alt='Carlos Borrega' className='object-cover' />
      </div>
      <div className='description bg-white p-8 col-span-3 flex items-center'>
        <div className='w-full'>
          {[
            "Hello, I'm Carlos. I am a front-end developer specializing in JavaScript, driven by a passion for constant learning. My background in retail management has honed my communication and teamwork skills, emphasizing my creative problem-solving abilities and adaptability to changes.",
            "I graduated from an extensive coding bootcamp by edX and earned a certificate in front-end web development. Throughout the four-month program, I successfully balanced my coursework with work commitments, showcasing both quick learning abilities and a strong commitment to continuous improvement.",
            "Detail-oriented and highly motivated, I derive satisfaction from coding efficient and responsive websites. I am eager to contribute my diverse skill set to dynamic development projects, demonstrating an unwavering commitment to excellence."
          ].map((text, idx) => (
            <p key={idx} className='text-black hyphens-auto my-6 mx-5 leading-6 md:text-3xl xs:text-lg'>{text}</p>
          ))}
          <div className='flex justify-center mt-6 lg:justify-end lg:mr-6'>
            <button className='lg:mr-2 md:p-3 xs:p-4'>
              <a href='./assets/docs/carlos-borrega_frontend-developer_resume.pdf' download='carlos-borrega_frontend-developer_resume' className='lg:text-md md:text-lg xs:text-xl'>
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
