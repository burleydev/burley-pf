import React from 'react';
import classNames from 'classnames';
import CodeBlock from '../components/codeblock';

const UserSnippet = ({ className }) => {
  const codeString = `
// Edit User Information Page

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './assets/logo.png';
import Menu from './menu';
import BlankProfile from './assets/blank-profile.png';
import { useProfile } from './ProfileContext';

const Edit: React.FC = () => {
    const navigate = useNavigate();
    const { profile, updateProfile } = useProfile();

    // Initialise local state to edit without affecting context until save
    const [localProfile, setLocalProfile] = useState(profile);
    const [profileImage, setProfileImage] = useState<string | null>(null);

    useEffect(() => {
        setLocalProfile(profile);
    }, [profile]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, field: keyof typeof profile) => {
        setLocalProfile({ ...localProfile, [field]: e.target.value });
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        updateProfile({ ...localProfile, profileImage });
        navigate('/profile');
    };

    return (
        <div className='background flex flex-col items-center mb-10'>
            <Menu />
            <div className='p-6 mt-4'>
                <img src={Logo} alt='PolicyCON Logo' className='sm:w-[14rem] h-auto xs:w-[10rem]' />
            </div>
            <div className='p-6 max-w-md mx-auto space-y-4'>
                <label htmlFor="profile-image-upload" className='cursor-pointer'>
                    <img 
                        src={profileImage ? profileImage : BlankProfile} 
                        alt='User Avatar' 
                        className='sm:w-[10rem] h-auto xs:w-[8rem] rounded-full border-4 border-white mx-auto mt-7 mb-10' 
                    />
                </label>
                <input 
                    type="file" 
                    id="profile-image-upload" 
                    accept="image/*" 
                    onChange={handleImageChange} 
                    className="hidden" // Hide the input
                />
                <div>
                    <label className='block font-medium'>First Name</label>
                    <input
                        type='text'
                        value={localProfile.firstName}
                        onChange={(e) => handleChange(e, 'firstName')}
                        className='w-[20rem] px-4 py-2 border rounded-md'
                    />
                </div>

                <div>
                    <label className='block font-medium'>Last Name</label>
                    <input
                        type='text'
                        value={localProfile.lastName}
                        onChange={(e) => handleChange(e, 'lastName')}
                        className='w-full px-4 py-2 border rounded-md'
                    />
                </div>

                <div>
                    <label className='block font-medium'>Occupation</label>
                    <input
                        type='text'
                        value={localProfile.occupation}
                        onChange={(e) => handleChange(e, 'occupation')}
                        className='w-full px-4 py-2 border rounded-md'
                    />
                </div>

                <div>
                    <label className='block font-medium'>Username</label>
                    <input
                        type='text'
                        value={localProfile.username}
                        onChange={(e) => handleChange(e, 'username')}
                        className='w-full px-4 py-2 border rounded-md'
                    />
                </div>

                <div>
                    <label className='block font-medium'>Pronouns</label>
                    <select
                        value={localProfile.pronouns}
                        onChange={(e) => handleChange(e, 'pronouns')}
                        className='w-full px-4 py-2 border rounded-md mb-2'
                    >
                        <option value=''>Select Pronouns</option>
                        <option value='He/Him'>He/Him</option>
                        <option value='She/Her'>She/Her</option>
                        <option value='They/Them'>They/Them</option>
                        <option value='Custom'>Custom</option>
                    </select>
                    {localProfile.pronouns === 'Custom' && (
                        <div className='w-full'>
                            <input
                                type='text'
                                placeholder='Enter custom pronouns'
                                onChange={(e) => handleChange(e, 'pronouns')}
                                className='w-full max-w-md px-4 py-2 border rounded-md'
                            />
                        </div>
                    )}
                </div>

                <button 
                    className='w-full mt-4 px-4 py-2 bg-brandRed text-white font-semibold rounded-md'
                    onClick={handleSave}>
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default Edit;
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

export default UserSnippet;