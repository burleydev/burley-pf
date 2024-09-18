// src/components/ToggleButton.jsx
import React, { useState } from 'react';
import Image1 from '../assets/lpa.png';
import Image2 from '../assets/lpb.png';

const ToggleButton = ({ className }) => {
  const [isImage1, setIsImage1] = useState(true);

  const handleToggle = () => {
    setIsImage1(!isImage1);
  };

  return (
    <div className={className}>
      <button onClick={handleToggle} className="toggle-button">
        {isImage1 ? 'Before' : 'After'}
      </button>
      <img
        src={isImage1 ? Image1 : Image2}
        alt="Toggle"
        style={{ width: 'auto', height: 'auto' }}
        className="toggle-image rounded-lg"
      />
    </div>
  );
};

export default ToggleButton;
