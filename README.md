# The Countdown

A simple, modern, and seasonal countdown experience built with **React** and **Vite**, designed to bring a touch of festive spirit to your browser.

## 🎯 Overview

The Countdown app provides a simple, modern interface that updates in real time as you approach a meaningful seasonal date. Originally created for Halloween, this countdown is designed to support effortless transitions into other themes - such as Thanksgiving, Christmas, New Year, or any special occasion.

## ✨ Features

- 🎄 **Simple, modern UI** with subtle animations and gradients.
- ⏳ **Live countdown** updating every second.
- 📅 **Date selection support** (for flexible future use).
- 💻 **Fast development workflow** powered by Vite.
- 🔧 **Lightweight, clean React component structure.**

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** and **npm** installed on your machine.

### Installation

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

## 📁 Architecture

```
the-countdown/
├── public/               # Static assets (served as-is).
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
│   └── index.css         # Global styles and Tailwind imports.
│
├── .gitignore            # Specifies intentionally untracked files and folders to ignore.
├── README.md             # Project overview, instructions, and documentation.
├── eslint.config.js      # ESLint configuration.
├── index.html            # HTML entry point.
├── vite.config.js        # Vite config for build and development.
├── package.json          # Project metadata, dependencies, and scripts.
└── package-lock.json     # Exact versions of installed dependencies.
```

## 🎨 Theming

The app uses a simple, extensible design system based on CSS variables. You can easily adjust color palettes, animations, and layout values in the global stylesheet.

## 🌱 Future Enhancements

- Theme switching (Fall, Winter, Holiday variants).
- Custom countdown events.
- Shareable countdown links.
- Background seasonal animations.

## 🧑‍💻 Author

Designed in **Saint Louis, Missouri** by **Kyle McColgan**.

## 📝 License

This project is open source and available under the MIT License.
