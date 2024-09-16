import React from 'react';
import '../index.css'

const Contact = () => {
  return (
<div id='contact' className='h-screen flex flex-col items-center justify-center'>
  <h3 className='mb-[8rem] text-4xl font-bold text-white'>Contact</h3>
  <div data-aos='fade-up' className='grid grid-cols-3 gap-[6rem]'>
    <div className='flex justify-center'>
      <a className='font-bold text-white text-3xl' href='mailto:c.borrega@proton.me' target='_blank'>Email</a>
    </div>
    <div className='flex justify-center'>
      <a className='font-bold text-white text-3xl' href='https://www.linkedin.com/in/carlosborrega/' target='_blank'>LinkedIn</a>
    </div>
    <div className='flex justify-center'>
      <a className='font-bold text-white text-3xl' href='https://github.com/borregadev' target='_blank'>GitHub</a>
    </div>
  </div>
</div>

  );
};

export default Contact;