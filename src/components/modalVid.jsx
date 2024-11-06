import React, { useState } from 'react';
import VideoPlayer from './videoPlayer'; // Import the custom VideoPlayer component

function VideoModal({ videoSrc }) {
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
            <a href={videoSrc}
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
                        {/* Replace the <video> tag with your custom VideoPlayer component */}
                        <VideoPlayer
                            src={videoSrc}
                            width="100%"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default VideoModal;