import React from 'react';
import classNames from 'classnames';
import CodeBlock from '../components/codeblock';

const LandingPageSnippet = ({ className }) => {
  const codeString = `
    const greeting = 'Hello, Carlos!';
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

export default LandingPageSnippet;
