import React from 'react';
import '../index.css'

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h3 className='mb-12 text-3xl font-bold'>CONTACT</h3>
      <div data-aos='fade-up' className='grid grid-cols-3 gap-[12rem] my-20'>
        <div>
          <a className='email font-bold text-white text-3xl' href='mailto:c.borrega@proton.me'>Email</a>
        </div>
        <div>
          <a className='linkedin font-bold text-white text-3xl' href='https://www.linkedin.com/in/carlosborrega/'>LinkedIn</a>
        </div>
        <div>
          <a className='github font-bold text-white text-3xl' href='https://github.com/borregadev'>GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;