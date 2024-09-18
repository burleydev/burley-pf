import React from 'react';
import CodeBlock from './codeblock'; // Import the CodeBlock component

const Example = ({ className }) => {
  const codeString = `
    const greeting = 'Hello, world!';
    console.log(greeting);
  `;

  return (
    <div className={className}>
      <h1>Code Example</h1>
      <CodeBlock code={codeString} language="javascript" />
    </div>
  );
};

export default Example;
