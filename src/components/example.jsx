import React from 'react';
import classNames from 'classnames';
import CodeBlock from './codeblock'; // Import the CodeBlock component

const Example = ({ className }) => {
  const codeString = `
    const greeting = 'Hello, world!';
    console.log(greeting);
  `;

  // Merge the passed className with additional classes
  const combinedClassNames = classNames(className, 'w-[100%]');

  return (
    <div className={combinedClassNames}>
      <CodeBlock code={codeString} language='javascript'/>
    </div>
  );
};

export default Example;
