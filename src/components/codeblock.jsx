import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-coy.css'; // Ensure this is the correct theme
import classNames from 'classnames'; // Import classnames
import PropTypes from 'prop-types'; // Import PropTypes

// Import language definitions
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';

const CodeBlock = ({ code, language }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      // Highlight the code block
      Prism.highlightElement(ref.current);
    }
  }, [code, language]); // Re-run the effect when code or language changes

  const codeClass = classNames(`language-${language}`);

  return (
    <pre className='rounded-3xl shadow-lg'>
      <code ref={ref} className={codeClass}>
        {code}
      </code>
    </pre>
  );
};

// Add PropTypes for type checking
CodeBlock.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default CodeBlock;
