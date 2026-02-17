//Filename: Header.jsx
//Author: Kyle McColgan
//Date: 16 February 2026
//Description: This file contains the Header component for the React Countdown project.

import "./Header.css";

function Header()
{
  return (
    <header className="header">
      <h1 className="header-title">
        <span className="header-accent" role="img" aria-label="biohazard">☣️</span>
         RE9 Release Day Countdown
      </h1>

      <p className="header-subtitle">
        Counting down to the terror… February 27th, 2026
      </p>
    </header>
  );
}

export default Header;
