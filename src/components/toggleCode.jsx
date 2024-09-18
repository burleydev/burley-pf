// src/components/ParentComponent.jsx
import React, { useState } from 'react';
import Example from './example'; // Import the Example component

const ToggleCode = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='code-snippet'>
      <button onClick={toggleVisibility} className='mb-4 px-4 py-2 text-white rounded-md w-48'>
        {isVisible ? 'Hide Code Example' : 'Show Code Example'}
      </button>

      {isVisible && (
        <Example className='' />
      )}
    </div>
  );
};

export default ToggleCode;
