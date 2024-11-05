import React from 'react';
import classNames from 'classnames';
import CodeBlock from '../components/codeblock';

const HomePageSnippet = ({ className }) => {
  const codeString = `
// Hashtags Tab

import React, { useState } from 'react';
import Comment from './comments';
import CommentForm from './commentForm';
import ForumUser from './assets/forum-user.png';
import ClockIcon from './assets/clock.png'
import EyeIcon from './assets/eye.png'
import CommentIcon from './assets/comment.png'

interface CommentData {
  username: string;
  text: string;
}

const HashtagCategories = [
  {
    name: 'Announcements',
    description: 'Official announcements and updates from the PolicyCON team.',
    topics: 54321,
    hashtag1: '#announcements',
    hashtag2: '#updates'
  },
  {
    name: 'Feedback & Suggestions',
    description: 'For users to provide feedback and suggestions on improving the PolicyCON platform.',
    topics: 12345,
    hashtag1: '#feedback',
    hashtag2: '#suggestions'
  },
  {
    name: 'Welcome & Introductions',
    description: 'A space for new members to introduce themselves and get acquainted with the community.',
    topics: 6789,
    hashtag1: '#welcome',
    hashtag2: '#introductions'
  }
];

const Hashtags: React.FC = () => {
  const [comments, setComments] = useState<CommentData[]>([]);

  const addComment = (username: string, text: string) => {
    setComments([...comments, { username, text }]);
  };

  return (
    <div className='grid lg:grid-cols-2 xs:grid-cols-1 lg:gap-x-[7rem] xl:grid-cols-[1fr,4fr,2fr]'>

      <div className='lg:'>
        {HashtagCategories.map((category, index) => (
          <div key={index} className='mb-8'>
            <div>
              <h2 className='text-2xl font-bold pb-2'>{category.name}</h2>
            </div>
            <div>
              <h3 className='text-[10px] font-bold pb-2'>{category.description}</h3>
            </div>
            <div className='mb-2'>
              <button className='bg-gray-300 rounded-md text-[10px] font-bold p-1 mr-2'>{category.hashtag1}</button>
              <button className='bg-gray-300 rounded-md text-[10px] font-bold p-1'>{category.hashtag2}</button>
            </div>
            <div>
              <p className='text-sm pb-2 text-red-300 font-bold'>Topics: {category.topics}</p>
            </div>
          </div>
        ))}
      </div>

      <div className=''>
        <h1 className='font-bold text-2xl mb-8'>#updates</h1>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className='flex flex-row mb-4'>
            <div className='text-center p-2'>
              <img src={ForumUser} alt='Forum User' className='rounded-full w-[4rem]' />
              <h4 className='font-bold pt-2'>@user</h4>
            </div>
            <div className='grow p-2'>
              <h2 className='text-2xl font-bold pb-2'>This is a test title {index + 1}</h2>
              <h3 className='text-xl font-bold pb-2'>This is a test header {index + 1}</h3>
              <p className='text-sm pb-2'>Some text for topic {index + 1}...</p>
              <div className='pt-3'>
                <button className='bg-gray-300 rounded-md text-[10px] font-bold p-1 mr-2'>#community</button>
                <button className='bg-gray-300 rounded-md text-[10px] font-bold p-1'>#question</button>
              </div>
            </div>
            <div className='p-2'>
              <div>
                <img src={ClockIcon} alt='Posted' className='inline mr-2' />
                <h4 className='text-xs pb-2 inline'>3 days ago</h4>
              </div>
              <div>
                <img src={EyeIcon} alt='Seen by' className='inline mr-2' />
                <h4 className='text-xs pb-2 inline'>545</h4>
              </div>
              <div>
                <img src={CommentIcon} alt='Comment' className='inline mr-2' />
                <h4 className='text-xs inline'>10 comments</h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='lg:col-span-2 xl:col-span-1'>
        <div className='mb-4'>
          <h1 className='font-black text-2xl text-brandRed mb-2'>This is a Test Topic</h1>
          <div className='my-4'>
            <h2 className='font-bold mb-8 inline'>Created by</h2>
            <img src={ForumUser} alt='Comment' className='inline w-10 rounded-full ml-2' />
          </div>

          <p>
            This is placeholder text for what would be in this section. This is where
            the body of text would be for each question. Users would be able to take
            up this space with text and also add media.
          </p>
        </div>


        {/* Comment Form and Comments */}


        <div className='comment-list'>
          {comments.map((comment, index) => (
            <Comment key={index} username={comment.username} text={comment.text}/>
          ))}
        </div>
        <CommentForm onSubmit={addComment} />
      </div>
    </div>
  );
};

export default Hashtags;


// Comments Form

import React, { useState } from 'react';

interface CommentFormProps {
  onSubmit: (username: string, text: string) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && text) {
      onSubmit(username, text);
      setUsername('');
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
        className='w-full mb-4 comment-placeholder'
          type='text'
          placeholder='Your name'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <textarea
          className='w-full shadow-xl resize-none comment-placeholder'
          placeholder='Your comment'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button type='submit' className='bg-brandRed rounded-lg px-6 py-1 text-white font-semibold mt-4'>Submit</button>
    </form>
  );
};

export default CommentForm;
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

export default HomePageSnippet;