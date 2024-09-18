import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // Ensure this path is correct
import classNames from 'classnames'; // Import classnames

// Import language definitions
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';

const CodeBlock = ({ code, language }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      // Ensure Prism.highlightElement is called after the component has rendered
      Prism.highlightElement(ref.current);
    }
  }, [code, language]); // Re-run the effect when code or language changes

  const codeClass = classNames(`language-${language}`);

  return (
    <pre className=''>
      <code ref={ref} className={codeClass}>
        {code}
      </code>
    </pre>
  );
};

export default CodeBlock;
