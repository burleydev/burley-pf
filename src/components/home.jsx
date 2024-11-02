import React from 'react';
import '../index.css';
import Icon from '../components/icon.jsx';

const Home = () => (
  <div className='flex flex-col items-center justify-center h-screen'>
    <h1 className='text-myBlack font-bold my-4 lg:text-8xl md:text-7xl sm:text-6xl xs:text-[2.6rem]' data-aos='fade-up'>
      Hello, I'm Carlos
    </h1>
    <h2 className='my-4 text-myGrey lg:text-3xl md:text-2xl sm:text-xl' data-aos='fade-up' data-aos-delay='600'>
      I'm a UX/UI Designer and Frontend Engineer
    </h2>
    <Icon/>
  </div>
);

export default Home;
