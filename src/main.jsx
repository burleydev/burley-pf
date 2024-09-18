import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // Choose a theme you like

// Import language definitions if needed
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
// Import other languages as needed


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
