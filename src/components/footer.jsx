import React from 'react';
import '../index.css'

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-[4rem]'>
        <a href='#' className='text-myBlack mb-2 text-lg hover:text-myGrey'><i class='fa-solid fa-up-long'></i></a>
        <h4 className='text-myBlack mb-10 lg:text-lg xs:text-sm md:text-md text-center'>© Charles Burley 2025</h4>
    </div>
  );
};

export default Footer;