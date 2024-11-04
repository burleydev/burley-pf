import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const ToggleCode = ({ SnippetComponent }) => { // Accept SnippetComponent as a prop
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='code-snippet mb-32'>
      <button 
        onClick={toggleVisibility} 
        className='mb-4 px-4 py-2 text-white bg-myBlack rounded-lg w-[12rem]' 
        aria-expanded={isVisible} // Accessibility enhancement
      >
        {isVisible ? 'Hide Code Snippet' : 'Show Code Snippet'}
      </button>

      {isVisible && SnippetComponent && ( // Render SnippetComponent if it exists
        <SnippetComponent className='additional-class' /> // Pass any necessary props
      )}
    </div>
  );
};

// Add PropTypes for type checking
ToggleCode.propTypes = {
  SnippetComponent: PropTypes.elementType.isRequired, // Ensure it's a valid React component
};

export default ToggleCode;
