import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types'; // Import PropTypes
import CodeBlock from './CodeBlock.jsx'; // Ensure this import is correct

const HomePageSnippet = ({ className }) => {
  const codeString = `const greeting = 'Hello, Pikachu!';\nconsole.log(greeting);`; // Maintain formatting

  // Merge the passed className with additional classes
  const combinedClassNames = classNames(className, 'w-[100%]');

  return (
    <div className={combinedClassNames}>
      <CodeBlock code={codeString} language='javascript' />
    </div>
  );
};

// Add PropTypes for type checking
HomePageSnippet.propTypes = {
  className: PropTypes.string, // Ensure className is a string
};

export default HomePageSnippet;

