import React from 'react';
import '../index.css';
import Icon from '../components/icon.jsx';

const Home = () => (
  <div className='flex flex-col items-center justify-center h-screen'>
    <h1 className='text-white font-bold my-4 lg:text-8xl md:text-9xl sm:text-7xl xs:text-[2.6rem]' data-aos='fade-up'>
      Hello, I'm Carlos
    </h1>
    <h2 className='my-4 text-white lg:text-3xl md:text-4xl sm:text-2xl xs:text-' datlga-aos='fade-up' data-aos-delay='600'>
      I'm a UX/UI and Frontend Engineer
    </h2>
    <Icon />
  </div>
);

export default Home;
