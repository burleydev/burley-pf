import React from 'react';
import '../index.css'

const Navbar = () => {
  return (
    <div className='grid grid-cols-4 text-center text-white font-bold mt-[3rem] mx-[5%] md:text-lg sm:text-md xs:text-sm'>
    <a href='#about'>About</a>
    <a href='#skills'>Skills</a>
    <a href='#projects'>Projects</a>
    <a href='#contact'>Contact</a>
</div>
  );
};

export default Navbar;