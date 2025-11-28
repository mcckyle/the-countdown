//Filename: Header.jsx
//Author: Kyle McColgan
//Date: 28 November 2025
//Description: This file contains the Header component for the React Countdown project.

import "./Header.css";

function Header()
{
  return (
    <header className="header">
      <h1 className="header-title">
        <span className="emoji">🎄</span> Christmas Countdown
      </h1>
      <p className="header-subtitle">
        Counting down to festive joy and holiday cheer!
      </p>
    </header>
  );
}

export default Header;
