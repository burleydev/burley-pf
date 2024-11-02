import React, { useState } from 'react';
import Example from './example';

const ToggleCode = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='code-snippet mb-40'>
      <button onClick={toggleVisibility} className='mb-4 px-4 py-2 text-white bg-myBlack rounded-md w-[12rem]'>
        {isVisible ? 'Hide Code Example' : 'Show Code Example'}
      </button>

      {isVisible && (
        <Example className='' />
      )}
    </div>
  );
};

export default ToggleCode;
