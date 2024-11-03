import React, { useState } from 'react';

const ToggleCode = ({ SnippetComponent }) => { // Accept SnippetComponent as a prop
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='code-snippet mb-40'>
      <button onClick={toggleVisibility} className='mb-4 px-4 py-2 text-white bg-myBlack rounded-md w-[12rem]'>
        {isVisible ? 'Hide Code Snippet' : 'Show Code Snippet'}
      </button>

      {isVisible && SnippetComponent && ( // Render SnippetComponent if it exists
        <SnippetComponent className='additional-class' /> // Pass any necessary props
      )}
    </div>
  );
};

export default ToggleCode;