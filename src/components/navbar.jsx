import React from 'react';
import '../index.css'

const Navbar = () => {
  return (
    <div className='grid grid-cols-4 gap-8 text-center text-white font-bold text-md mt-[3rem] mx-[12rem]'>
    <a href='#about'>About</a>
    <a href='#skills'>Skills</a>
    <a href='#projects'>Projects</a>
    <a href='#contact'>Contact</a>
</div>
  );
};

export default Navbar;