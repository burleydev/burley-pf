import React from 'react';
import '../index.css'

const Navbar = () => {
  return (
    <div className='hidden grid-cols-4 text-center text-white font-bold mt-[3rem] mx-[12rem] lg:text-md md:text-sm sm:grid text-xs'>
    <a href='#about'>About</a>
    <a href='#skills'>Skills</a>
    <a href='#projects'>Projects</a>
    <a href='#contact'>Contact</a>
</div>
  );
};

export default Navbar;