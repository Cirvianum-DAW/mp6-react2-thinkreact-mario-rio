import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Create a root container for rendering the application
const root = createRoot(document.getElementById('root'));

// Render the App component inside the root container wrapped in StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
