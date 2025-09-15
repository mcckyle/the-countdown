//Filename: main.jsx
//Author: Kyle McColgan
//Date: 14 September 2025
//Description: This file contains the main component for the Countdown React project.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
