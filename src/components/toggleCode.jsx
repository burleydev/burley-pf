import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const ToggleCode = ({ SnippetComponent }) => { // Accept SnippetComponent as a prop
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div className='flex justify-center'>
        <button
          onClick={toggleVisibility}
          className='px-4 py-[1rem] text-white bg-myBlack rounded-lg lg:w-[12rem] font-bold mb-10'
          aria-expanded={isVisible} // Accessibility enhancement
        >
          {isVisible ? 'Hide Code Snippet' : 'Show Code Snippet'}
        </button>
      </div>

      {isVisible && SnippetComponent && ( // Render SnippetComponent if it exists
        <SnippetComponent className='additional-class w-screen' /> // Pass any necessary props
      )}
    </div>
  );
};

// Add PropTypes for type checking
ToggleCode.propTypes = {
  SnippetComponent: PropTypes.elementType.isRequired, // Ensure it's a valid React component
};

export default ToggleCode;
