import React from 'react';
import '../index.css'

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center h-24'>
        <a href='#' className='text-white p-2'><i class='fa-solid fa-arrow-up-long'></i></a>
        <h4 className='text-white text-sm mb-8'>© Carlos Borrega 2024</h4>
    </div>
  );
};

export default Footer;