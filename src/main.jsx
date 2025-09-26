//Filename: main.jsx
//Author: Kyle McColgan
//Date: 25 September 2025
//Description: This file contains the main component for the Countdown React project.

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
