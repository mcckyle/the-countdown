[![CI and Deploy](https://github.com/mcckyle/the-countdown/actions/workflows/ci.yml/badge.svg)](https://github.com/mcckyle/the-countdown/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/License-MIT-blue)](./LICENSE)
# The Countdown

A modern, seasonal countdown built with React and Vite.

The Countdown provides a focused way to count down to meaningful dates, with live time updates and support for selecting future dates.

## Overview

The project is designed around a small, reusable React component structure and an intentionally restrained visual system.

Seasonal content can be updated without changing the application's underlying countdown functionality, allowing the experience to evolve throughout the year.

## Features

- Live countdown updated every second.
- Future date selection with a native date control.
- Responsive layout for desktop and mobile screens.
- Accessible semantic markup and keyboard-friendly controls.
- Lightweight styling built with modern CSS.
- Seasonal presentation built around reusable components.

## Tech Stack

| Technology | Purpose |
| --- | --- |
| [React](https://react.dev/) | User interface and component architecture |
| [Vite](https://vite.dev/) | Development server and production build |
| JavaScript | Application logic |
| CSS | Layout, responsive design, animation, and theming |
| ESLint | Code quality and consistency |

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository and install its dependencies:

```bash
git clone https://github.com/mcckyle/the-countdown.git
cd the-countdown
npm install
```

### Development

Start the Vite development server:

```bash
npm run dev
```

### Production Build

Create an optimized production build:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
the-countdown/
├── public/
│   └── images/           # Static assets (served as-is).
│
├── src/                  # Application Source code.
│   ├── components/       # Reusable React components.
│   │   ├── Countdown/
│   │   │   ├── Countdown.jsx
│   │   │   └── Countdown.css
│   │   │
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   │
│   │   ├── DatePicker/
│   │   │   ├── DatePicker.jsx
│   │   │   └── DatePicker.css
│   │   │
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.css
│   │
│   ├── utils/
│   │   └── timeUtils.js
│   │
│   ├── App.jsx           # Main React application component.
│   ├── main.jsx          # React DOM entry point.
│   ├── App.css           # Styles specific to App.jsx.
│   └── index.css         # Global styles.
│
├── .gitignore            # Specifies intentionally untracked files and folders to ignore.
├── README.md             # Project overview, instructions, and documentation.
├── eslint.config.js      # ESLint configuration.
├── index.html            # HTML entry point.
├── vite.config.js        # Vite config for build and development.
├── package.json          # Project metadata, dependencies, and scripts.
└── package-lock.json     # Exact versions of installed dependencies.
```

## Design

The interface uses a small CSS design system built around shared variables for typography, color, spacing, borders, motion, and responsive behavior.

The visual language intentionally favors:

- Editorial typography.
- Spacious layouts.
- Restrained color and atmosphere.
- Subtle motion.
- Clear visual hierarchy.

Seasonal themes can be created by adjusting the design tokens and content without restructuring the application.

## Customizing the Countdown

The default event is configured in `App.jsx`:

```bash
const INITIAL_TARGET_DATE = "2026-10-12T00:00:00";
```

Update this value to establish a different initial countdown date.

The event title, date, supporting copy, and completion messages can be updated through the `Header` and `Countdown` components.

## Accessibility

The Countdown is designed with accessibility in mind, including:

- Semantic HTML
- Descriptive labels for countdown values.
- Keyboard-accessible form controls.
- Visible focus states.
- Reduced-motion support.
- Responsive text and layout behavior.

Seasonal themes can be created by adjusting the design tokens and content without restructuring the application.

## Deployment

The project is configured for production builds with Vite and can be deployed to static hosting platforms that support client-side applications.

The repository's GitHub Actions workflow handles continuous intergration and deployment.

## Author

Designed in Saint Louis, Missouri by **Kyle McColgan**.

[Portfolio](https://mcckyle.github.io/) · [GitHub](https://github.com/mcckyle)

## License

This Countdown is open source software released under the [MIT License](./LICENSE).
