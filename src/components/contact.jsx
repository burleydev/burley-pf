import React from 'react';
import '../index.css'

const Contact = () => {
  return (
    <div id='contact' className='flex flex-col items-center justify-center h-screen'>
      <h3 className='mb-[7rem] text-3xl font-bold text-white'>CONTACT</h3>
      <div data-aos='fade-up' className='flex flex-row'>
        <div>
          <a className='email font-bold text-white text-4xl px-10' href='mailto:c.borrega@proton.me' target='_blank'>Email</a>
        </div>
        <div>
          <a className='linkedin font-bold text-white text-4xl px-10' href='https://www.linkedin.com/in/carlosborrega/' target='_blank'>LinkedIn</a>
        </div>
        <div>
          <a className='github font-bold text-white text-4xl px-10' href='https://github.com/borregadev' target='_blank'>GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;