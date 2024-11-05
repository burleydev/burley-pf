import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/base16/summerfruit-light.css';

import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/typescript';
import PropTypes from 'prop-types';

const CodeBlock = ({ code, language }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current); // Highlight the code block
    }
  }, [code, language]); // Re-run if code or language changes

  return (
    <pre className='shadow-lg xs:rounded-none lg:rounded-3xl'>
      <code ref={codeRef} className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};

CodeBlock.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default CodeBlock;
