import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App'; // Adjust the path if necessary

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);