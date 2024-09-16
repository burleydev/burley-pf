import React from 'react';
import '../index.css';

const Home = () => (
  <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-white font-bold my-4 lg:text-7xl md:text-6xl sm:text-5xl xs:text-4xl" data-aos="fade-up">
      Hello, I'm Carlos
    </h1>
    <h2 className="my-4 text-white lg:text-2xl md:text-xl sm:text-lg xs:text-md" data-aos="fade-up" data-aos-delay="600">
      I'm a UX/UI and Frontend Engineer
    </h2>
  </div>
);

export default Home;
