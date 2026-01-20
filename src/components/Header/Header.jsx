//Filename: Header.jsx
//Author: Kyle McColgan
//Date: 19 January 2026
//Description: This file contains the Header component for the React Countdown project.

import "./Header.css";

function Header()
{
  return (
    <header className="header">
      <h1 className="header-title">
        <span className="header-accent" aria-hidden="true">❤️</span>
         Valentine&rsquo;s&nbsp;Day&nbsp;Countdown
      </h1>

      <p className="header-subtitle">
        A gentle countdown toward something meaningful
      </p>
    </header>
  );
}

export default Header;
