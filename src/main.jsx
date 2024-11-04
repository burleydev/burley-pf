import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// import 'highlight.js/styles/default.css'; // Choose a Highlight.js theme
// import hljs from 'highlight.js'; // Import Highlight.js

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// // Initialize Highlight.js
// hljs.initHighlightingOnLoad();
