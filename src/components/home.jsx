import React from 'react';
import '../index.css';

const Home = () => (
  <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-white font-bold my-4 md:text-7xl sm:text-6xl xs:text-[2.6rem]" data-aos="fade-up">
      Hello, I'm Carlos
    </h1>
    <h2 className="my-4 text-white md:text-2xl sm:text-xl xs:text-lg" data-aos="fade-up" data-aos-delay="600">
      I'm a UX/UI and Frontend Engineer
    </h2>
  </div>
);

export default Home;
