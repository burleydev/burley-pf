import React from 'react';
import '../index.css'

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center h-24 mt-[4rem]'>
        <a href='#' className='text-myBlack mb-6 text-lg'><i class='fa-solid fa-up-long'></i></a>
        <h4 className='text-myBlack mb-10 lg:text-lg md:text-md'>© Carlos Borrega 2024</h4>
    </div>
  );
};

export default Footer;