import React from 'react';
import classNames from 'classnames';
import CodeBlock from '../components/codeblock';

const LoginSnippet = ({ className }) => {
  const codeString = `
// Login Page

import React, { useState } from 'react';
import axios from 'axios';
import './index.css';
import Logo from './assets/logo.png';
import User from './assets/user.png';

const Login: React.FC = () => {
    const [email, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://policycon-backend.azurewebsites.net/auth/login/', {
                email,
                password,
            });

            const { access, refresh } = response.data;

            localStorage.setItem('accessToken', access);
            localStorage.setItem('refreshToken', refresh);

            console.log('Login successful:', response.data);
            
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Login failed:', error.response?.data);
            } else {
                console.error('Unexpected error:', error);
            }
        }
    };

    return (
        <div className='background flex flex-col justify-center items-center h-screen w-screen bg-white'>
            <div className='p-6'>
                <img src={Logo} alt='PolicyCON Logo' className='sm:w-[18rem] h-auto xs:w-[10rem]' />
            </div>

            <div className='bg-gradient-to-b from-brandGrey/70 to-brandGrey/10 p-8 rounded-lg shadow-md w-[60%]'>
                <h2 className='md:text-6xl font-extrabold text-left mb-6 text-brandRed leading-[4.5rem] sm:text-4xl xs:text-2xl'>
                    Welcome to <br /> the Community <br /> Forum
                </h2>
                <div className='grid xl:grid-cols-2 lg:grid-cols-1'>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-4'>
                                <input
                                    type='text'
                                    id='email'
                                    value={email}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder='Enter your email'
                                    className='mt-1 p-2 block w-full border focus:outline-none focus:ring-2 focus:ring-brandRed text-black xs:text-[12px] sm:text-lg'
                                    required
                                />
                            </div>

                            <div className='mb-4'>
                                <input
                                    type='password'
                                    id='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder='Enter your password'
                                    className='mt-1 p-2 block w-full border focus:outline-none focus:ring-2 focus:ring-brandRed text-black xs:text-[12px] sm:text-lg'
                                    required
                                />
                            </div>

                            <button
                                type='button'
                                className='xs:w-[9rem] sm:w-[14rem] bg-brandRed text-white py-1 rounded-md border-black border-2 xs:text-[12px] xs:px-2 sm:text-lg sm:px-[1rem]'
                            >
                                Forgotten password
                            </button>
                        </form>
                        <div className='flex justify-between xs:pt-4'>
                            <div>
                                <label className='text-gray-400 text-[10px] mt-4'>I agree with the terms and conditions laid out on the PolicyCON site
                                </label>
                            </div>
                            <div>
                                <input type='checkbox' className='form-checkbox h-5 w-5 text-gray-600 border-gray-300 rounded ml-2 accent-gray-600'/>
                            </div>
                        </div>
                        <div className='flex justify-between pt-2'>
                            <div>
                                <label className='text-gray-400 text-[10px]'>I agree to the use of cookies and the privacy statement set out by PolicyCON
                                </label>
                            </div>
                            <div>
                                <input type='checkbox' className='form-checkbox h-5 w-5 text-gray-600 border-gray-300 rounded ml-2 accent-gray-600' />
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <button
                                type='submit'
                                className='mt-4 w-[6rem] text-brandRed font-bold py-1 rounded-md border-brandRed border-2 hover:bg-brandRed hover:text-white xs:text-[12px] sm:text-lg'
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                    <div className='user-image xl:flex justify-end xl:w-auto lg:visibility: hidden'>
                        <img src={User} alt='PolicyCON User' className='rounded-md' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
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

export default LoginSnippet;

