import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App'; // Adjust the path if necessary

const appDiv = document.getElementById('app');
const root = createRoot(appDiv);

root.render(<App/>)