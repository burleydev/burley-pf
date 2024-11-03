import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; // Make sure this is the correct theme
import classNames from 'classnames'; // Import classnames

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

export default CodeBlock;
