import React, { useState } from "react";

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative lg:w-[63rem] h-auto overflow-hidden bg-white lg:p-4 lg:my-10 lg:mx-0 xs:rounded-none lg:rounded-3xl xs:p-0 xs:mx-0 xs:m-0 xs:w-screen shadow-lg">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex flex-col justify-center xs:py-10 xs:px-6 lg:p-8"
          >
            <h3 className="text-center text-myBlack font-bold xs:text-xl lg:text-2xl">
              {slide.title}
            </h3>
            <p className="text-myBlack leading-8 xs:p-[2rem] lg:p-[4rem] text-justify xs:text-sm lg:text-lg xs:leading-7 lg:leading-8">
              {slide.description}
            </p>
          </div>
        ))}
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-transparent rounded-full hover:bg-transparent"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-transparent rounded-full hover:bg-transparent"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
