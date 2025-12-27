//Filename: Header.jsx
//Author: Kyle McColgan
//Date: 26 December 2025
//Description: This file contains the Header component for the React Countdown project.

import "./Header.css";

function Header()
{
  return (
    <header className="header">
      <h1 className="header-title">
        <span className="header-accent" aria-hidden="true">🎆</span>
         New&nbsp;Year&nbsp;Countdown
      </h1>

      <p className="header-subtitle">
        Counting down to fresh beginnings!
      </p>
    </header>
  );
}

export default Header;
