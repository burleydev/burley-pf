import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // Choose a theme you like
import classNames from 'classnames'; // Import classnames

// Import language definitions if needed
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';

const CodeBlock = ({ code, language }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current);
    }
  }, [code]);

  // Use classnames to dynamically set the class
  const codeClass = classNames(`language-${language}`, {
    // Add any additional classes or conditions here
  });

  return (
    <pre>
      <code ref={ref} className={codeClass}>
        {code}
      </code>
    </pre>
  );
};

export default CodeBlock;
