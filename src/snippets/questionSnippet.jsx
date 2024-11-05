import React from 'react';
import classNames from 'classnames';
import CodeBlock from '../components/codeblock';

const QuestionSnippet = ({ className }) => {
  const codeString = `
// Question Entry Page

import React, { useState } from 'react';
import GreenCheck from './assets/green-tick.png'
import RedCross from './assets/red-cross.png'
import HashtagDropdown from './hashtagDropdown';
import AddMedia from './addMedia';

// Define the type for the blog post form data
interface QuestionEntry {
    title: string;
    subheading: string;
    hashtags: string[];
    body: string;
    mediaFiles: File[];
}

const QuestionEntry: React.FC = () => {
    const [formData, setFormData] = useState<BlogPostForm>({
        title: '',
        subheading: '',
        hashtags: [],
        body: '',
        mediaFiles: [],
    });

    const [availableHashtags] = useState<string[]>([
        'Policy',
        'Economics',
        'Politics',
        'Environment',
        'Education',
    ]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleHashtagChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedHashtags = Array.from(
            e.target.selectedOptions,
            (option) => option.value
        );
        setFormData((prevData) => ({
            ...prevData,
            hashtags: selectedHashtags,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        setFormData((prevData) => ({
            ...prevData,
            mediaFiles: files,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitted data:', formData);
    };

    return (
        <form onSubmit={handleSubmit} className='bg-white p-4 mx-10 mt-10 mb-40 shadow-xl rounded-lg xs:w-[20rem] xs:mb-10 sm:w-[30rem] md:w-[40rem] lg:w-[50rem]'>
            <div className='relative mb-4'>
                <input
                    type='text'
                    name='title'
                    id='title'
                    value={formData.title}
                    onChange={handleChange}
                    placeholder='This is the title to your question'
                    className='placeholder-bold w-full p-2 border border-gray-300 rounded bg-gray-200 placeholder-black focus:border-brandRed focus:border-2 focus:outline-none xs:text-[12px] sm:text-[16px]'
                    required
                />
                {/* Conditional Rendering for Check or Cross Image */}
                {formData.title ? (
                    <img
                        src={GreenCheck}
                        alt='Check Mark'
                        className='absolute w-5 h-5 xs:top-[0.4rem] xs:right-2 sm:right-3 sm:top-3'
                    />
                ) : (
                    <img
                        src={RedCross}
                        alt='Cross Mark'
                        className='absolute w-5 h-5 xs:top-[0.4rem] xs:right-2 sm:right-3 sm:top-3'
                    />
                )}
            </div>


            <div className='relative mb-4'>
                <input
                    type='text'
                    name='subheading'
                    id='subheading'
                    value={formData.subheading}
                    onChange={handleChange}
                    placeholder='This is for the sub-heading'
                    className='placeholder-bold w-full p-2 border border-gray-300 rounded bg-gray-200 placeholder-black focus:border-brandRed focus:border-2 focus:outline-none xs:text-[12px] sm:text-[16px]'
                    required
                />
                {/* Conditional Rendering for Check or Cross Image */}
                {formData.subheading ? (
                    <img
                        src={GreenCheck}
                        alt='Check Mark'
                        className='absolute w-5 h-5 xs:top-[0.4rem] xs:right-2 sm:right-3 sm:top-3'
                    />
                ) : (
                    <img
                        src={RedCross}
                        alt='Cross Mark'
                        className='absolute w-5 h-5 xs:top-[0.4rem] xs:right-2 sm:right-3 sm:top-3'
                    />
                )}
            </div>

            <HashtagDropdown availableHashtags={['#announcements', '#news', '#updates', '#feedback', '#community', '#suggestions', '#welcome', '#currentaffairs']} />



            <div className='mb-4'>
                <textarea
                    name='body'
                    id='body'
                    value={formData.body}
                    onChange={handleChange}
                    className='placeholder-bold w-full p-2 border border-gray-300 rounded resize-none bg-gray-200 placeholder-black focus:border-brandRed focus:border-2 focus:outline-none xs:text-[12px] sm:text-[16px]'
                    placeholder='Your main body of text goes here'
                    rows={6}
                    required
                />
            </div>
            <AddMedia />


        </form>
    );
};

export default QuestionEntry;
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

export default QuestionSnippet;