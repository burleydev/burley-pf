import React from 'react';
import classNames from 'classnames';
import CodeBlock from './codeblock'; // Ensure this import is correct

const UserSnippet = ({ className }) => {
  const codeString = `
    const greeting = 'Hello, you!';
    console.log(greeting);
  `;

  // Merge the passed className with additional classes
  const combinedClassNames = classNames(className, 'w-[100%]');

  return (
    <div className={combinedClassNames}>
      <CodeBlock code={codeString} language='javascript' />
    </div>
  );
};

export default UserSnippet;
