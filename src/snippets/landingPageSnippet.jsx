import React from 'react';
import classNames from 'classnames';
import CodeBlock from '../components/codeblock';

const LandingPageSnippet = ({ className }) => {
  const codeString = `
// Analyst Areas
  
import React from 'react';
import '../../index.css';
import democracy from './assets/democracy.png';
import inclusivity from './assets/inclusivity.png';
import intellectual from './assets/intellectual.png';
import cybersecurity from './assets/cybersecurity.png';
import art from './assets/art.png';
import technology from './assets/technology.png';
import disaster from './assets/disaster.png';
import sustainability from './assets/sustainability.png';
import science from './assets/science.png';
import conflict from './assets/conflict.png';
import environment from './assets/environment.png';
import justice from './assets/justice.png';

const AnalystAreas: React.FC = () => {
    return (
        <div>

            <div>
                <h1 className='pt-[3rem] text-center text-4xl font-bold'>
                    Popular <span>Analyst Areas</span>
                </h1>
            </div>

            <div className="grid grid-cols-4 justify-items-center p-20 gap-8">
                {[
                    { src: democracy, alt: "Democracy", title: "Democracy" },
                    { src: inclusivity, alt: "Inclusivity", title: "Inclusivity" },
                    { src: justice, alt: "Criminal Justice", title: "Criminal Justice" },
                    { src: intellectual, alt: "Intellectual Property", title: "Intellectual Property" },
                    { src: cybersecurity, alt: "Cybersecurity", title: "Cybersecurity" },
                    { src: art, alt: "Art and Culture", title: "Art and Culture" },
                    { src: technology, alt: "Technology", title: "Technology" },
                    { src: disaster, alt: "Disaster Management", title: "Disaster Management" },
                    { src: sustainability, alt: "Sustainability", title: "Sustainability" },
                    { src: science, alt: "Science and Technology", title: "Science and Technology" },
                    { src: conflict, alt: "Conflict Resolution", title: "Conflict Resolution" },
                    { src: environment, alt: "Environment", title: "Environment" },
                ].map((item, index) => (
                    <div key={index} className="grid grid-cols-2 shadow-xl place-items-center p-2 w-[15rem]">
                        <div>
                            <img className="h-12 w-12" src={item.src} alt={item.alt} />
                        </div>
                        <div className="p-2">
                            <h1 className="font-bold text-sm">{item.title}</h1>
                            <h2 className="text-xs">0 Analysts</h2>
                        </div>
                    </div>
                ))}
            </div>


            <div className='relative text-center pb-[4rem]'>
                <button className='button text-white text-lg font-bold mt-6 py-4 px-6 rounded-lg'>
                    Explore Analysts
                </button>
            </div>

        </div>
    );
};

export default AnalystAreas;


// Featured Analysts Carousel

import React, { useState } from 'react';
import woman from './assets/woman.png';

const items = [
    {
        id: 1,
        img: woman,
        name: "User",
        rating: "⭐⭐⭐⭐⭐",
        reviews: "0 Policy Reviews",
        tags: ["Science", "Environment"],
    },
    {
        id: 2,
        img: woman,
        name: "User",
        rating: "⭐⭐⭐⭐⭐",
        reviews: "0 Policy Reviews",
        tags: ["Science", "Environment"],
    },
    {
        id: 3,
        img: woman,
        name: "User",
        rating: "⭐⭐⭐⭐⭐",
        reviews: "0 Policy Reviews",
        tags: ["Science", "Environment"],
    }
];

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative w-full max-w-lg mx-auto">
            <div className="overflow-hidden rounded-lg shadow-lg">
                <div
                    className="flex transition-transform duration-700"
                    style={{ transform: 'translateX(-' + currentIndex * 100 + '%)' }}

                >
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="flex-shrink-0 w-full"
                        >
                            <div className="grid grid-cols-1 justify-items-center rounded overflow-hidden">
                                <img className="w-[4rem] rounded-full" src={item.img} alt={item.name} />
                                <div className="px-6 py-4 text-center">
                                    <div className="font-bold text-sm mb-2">{item.name}</div>
                                    <div>{item.rating}</div>
                                    <div className="font-bold text-sm mb-2">{item.reviews}</div>
                                    <div className="px-6 pt-4 pb-2">
                                        {item.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <button className='bg-transparent border border-gray-500 text-gray-700 font-semibold hover:bg-[#ff3838] hover:border-[#ff3838] hover:text-white py-2 px-4 rounded'>
                                        Visit Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2"
            >
                &#10094;
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2"
            >
                &#10095;
            </button>
        </div>
    );
};

export default Carousel;
  `;
  

  // Merge the passed className with additional classes and add whitespace handling
  const combinedClassNames = classNames(
    className,
    'text-left', 
    'w-[60rem]', 
    'whitespace-pre-wrap', 
    'break-words'
  );

  return (
    <div className={combinedClassNames}>
      <CodeBlock code={codeString} language='javascript' />
    </div>
  );
};

export default LandingPageSnippet;