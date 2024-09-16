import React from 'react';
import '../index.css'

const Home = () => {
  return (
    <section className='home'>
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='my-4 text-7xl font-bold' data-aos='fade-up'>Hello, I'm Carlos</h1>
            <h2 className='my-4 text-2xl' data-aos='fade-up' data-aos-delay='600'>I'm a UX/UI and Frontend Engineer</h2>
        </div>
    </section>
  );
};

export default Home;