import React from 'react';
import '../index.css';

const Contact = () => {
  const links = [
    { href: 'mailto:charlesburley2@gmail.com', label: 'Email' },
    { href: 'https://www.linkedin.com/in/charlesburleyldn/', label: 'LinkedIn' },
    { href: 'https://github.com/burleydev', label: 'GitHub' },
  ];

  return (
    <div id='contact' className='xs:h-[40rem] lg:h-screen flex flex-col items-center justify-center'>
      <h3 className='mb-[8rem] font-bold text-myBlack lg:text-5xl md:text-4xl xs:text-3xl'>Contact</h3>
      <div data-aos='fade-up' className='grid xs:gap-[3rem] lg:gap-[6rem] lg:grid-cols-3 md:grid-cols-1'>
        {links.map(({ href, label }) => (
          <div key={label} className='flex justify-center'>
            <a className='font-bold text-myBlack lg:text-4xl md:text-3xl xs:text-2xl hover:text-myGrey' href={href} target='_blank' rel='noopener noreferrer'>
              {label}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;