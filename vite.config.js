//Filename: vite.config.js
//Author: Kyle McColgan
//Date: 15 September 2025
//Description: This file contains the Vite config for the Countdown React project.

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/the-countdown/',
})
