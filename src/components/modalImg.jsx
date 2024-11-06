import React, { useState } from 'react';

function ImageModal({ imageSrc }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='grid'>
      <a href={imageSrc}
         onClick={openModal}
         className='xs:font-bold xs:text-xs sm:text-sm italic xs:text-myGrey xs:mt-4 xs:mb-8 xs:mr-4 text-right'>
        Show mobile version
      </a>

      {isModalOpen && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div className="bg-white p-4 rounded-lg max-w-xs w-full">
            <img 
              src={imageSrc} 
              alt="Mobile Version" 
              className="w-full h-auto rounded-md" 
              onClick={closeModal} // Close modal when clicking the image
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageModal;

