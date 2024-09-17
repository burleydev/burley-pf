import React from 'react';
import '../index.css'

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center h-24'>
        <a href='#' className='text-white mb-6 text-4xl'><i class='fa-solid fa-arrow-up-long'></i></a>
        <h4 className='text-white mb-10 lg:text-lg md:text-xl'>© Carlos Borrega 2024</h4>
    </div>
  );
};

export default Footer;