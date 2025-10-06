//Filename: Header.jsx
//Author: Kyle McColgan
//Date: 4 October 2025
//Description: This file contains the Header component for the Countdown React project.

import "./Header.css";

function Header()
{
  return (
    <header className="header">
      <h1 className="header-title">
        <span className="emoji">🎃</span> Countdown
      </h1>
      <p className="header-subtitle">Counting down to Halloween!</p>
    </header>
  );
}

export default Header;
