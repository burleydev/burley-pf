import React from 'react';
import '../index.css'

const Navbar = () => {
  return (
    <div className='grid grid-cols-4 gap-8 text-center text-white font-bold text-md mt-[3rem] mx-[12rem]'>
    <a href='#about'>ABOUT</a>
    <a href='#skills'>SKILLS</a>
    <a href='#projects'>PROJECTS</a>
    <a href='#contact'>CONTACT</a>
</div>
  );
};

export default Navbar;